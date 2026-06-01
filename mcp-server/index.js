#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readdir, readFile } from "node:fs/promises";
import { join, relative, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

// Resolve skills directory relative to this file or via env override
const __dir = dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = process.env.SAJJ_STEM_SKILLS_DIR ?? join(__dir, "..", "skills");

// ── Domain metadata ──────────────────────────────────────────────────────────

const DOMAINS = {
  original:     "Core STEM — Applied Physics, Linear Algebra, Quantum Math, Engineering Math, Geometry, Design Math",
  math:         "Advanced Mathematics — Differential Equations, Numerical Methods, Probability, Optimization, Abstract Algebra, Number Theory, Set Theory, Topology, Category Theory",
  formal:       "Formal Methods — Lean 4 Theorem Proving, SAT/SMT Solving, Z3, Constraint Satisfaction",
  physics:      "Physics Tools — Astropy (astronomy), Fluidsim (CFD / Navier-Stokes)",
  quantum:      "Quantum Computing — Cirq, Qiskit, PennyLane, QuTiP",
  chemistry:    "Chemistry & Materials — RDKit, DeepChem, COBRApy, PyMatGen, Datamol",
  biology:      "Biology & Biosignals — BioPython, Scanpy, scvi-tools, NeuROKit2, scikit-bio",
  "data-science": "Data Science — SymPy, PyMC, PyMoo, Statsmodels, NetworkX, EDA, Statistical Analysis, Scientific Visualization",
  research:     "Scientific Research — Scientific Writing, Brainstorming, Critical Thinking, Literature Review, Hypothesis Generation",
};

// ── Index builder ────────────────────────────────────────────────────────────

async function buildIndex(skillsDir) {
  const entries = [];

  for (const domain of Object.keys(DOMAINS)) {
    const domainDir = join(skillsDir, domain);
    let files;
    try {
      files = await readdir(domainDir);
    } catch {
      continue;
    }

    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const filePath = join(domainDir, file);
      let content = "";
      try {
        content = await readFile(filePath, "utf-8");
      } catch {
        continue;
      }

      // Parse frontmatter name/description
      const fm = parseFrontmatter(content);
      const skillName = fm.name || basename(file, ".md");
      const description = fm.description || extractFirstHeading(content) || "";

      // Extract keywords from content
      const keywords = extractKeywords(content, skillName, domain);

      entries.push({ name: skillName, description, domain, file: basename(file), path: join(domain, file), content, keywords });
    }
  }

  return entries;
}

function parseFrontmatter(content) {
  if (!content.startsWith("---")) return {};
  const end = content.indexOf("---", 3);
  if (end === -1) return {};
  const block = content.slice(3, end).trim();
  const result = {};
  for (const line of block.split("\n")) {
    const m = line.match(/^(\w[\w-]*)\s*:\s*(.+)/);
    if (m) result[m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
  }
  return result;
}

function extractFirstHeading(content) {
  const m = content.match(/^#\s+(.+)/m);
  return m ? m[1].trim() : "";
}

function extractKeywords(content, name, domain) {
  const words = new Set([name.toLowerCase(), domain.toLowerCase()]);
  // Add words from description/heading lines
  const lines = content.slice(0, 800).split("\n");
  for (const line of lines) {
    if (line.startsWith("#") || line.startsWith(">") || line.startsWith("-")) {
      for (const w of line.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)) {
        if (w.length > 3) words.add(w);
      }
    }
  }
  return [...words];
}

// ── Search ───────────────────────────────────────────────────────────────────

function searchSkills(index, query, domainFilter) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  let pool = domainFilter
    ? index.filter(s => s.domain === domainFilter)
    : index;

  const scored = pool.map(skill => {
    let score = 0;
    for (const term of terms) {
      if (skill.name.toLowerCase().includes(term))        score += 10;
      if (skill.description.toLowerCase().includes(term)) score += 5;
      if (skill.domain.toLowerCase().includes(term))      score += 3;
      if (skill.keywords.some(k => k.includes(term)))     score += 4;
    }
    return { ...skill, score };
  }).filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 15);

  return scored.map(({ name, description, domain, path, score }) => ({ name, description, domain, path, score }));
}

// ── Main ─────────────────────────────────────────────────────────────────────

let index;

async function main() {
  index = await buildIndex(SKILLS_DIR);

  const server = new McpServer({ name: "sajj-stem", version: "2.0.0" });

  // Tool 1: List all domains
  server.tool(
    "list_stem_domains",
    "List all STEM domains in the sajj-stem plugin with skill counts and descriptions.",
    {},
    async () => {
      const domainCounts = {};
      for (const e of index) {
        domainCounts[e.domain] = (domainCounts[e.domain] || 0) + 1;
      }

      const lines = Object.entries(DOMAINS).map(([domain, desc]) =>
        `**${domain}** (${domainCounts[domain] || 0} skills)\n  ${desc}`
      );

      return { content: [{ type: "text", text: lines.join("\n\n") }] };
    }
  );

  // Tool 2: Search skills
  server.tool(
    "search_stem_skills",
    "Search for STEM skills by keyword, topic, or tool name. Returns matching skills with descriptions and file paths.",
    {
      query: z.string().describe("Search query — e.g. 'quantum circuits', 'bayesian inference', 'differential equations', 'rdkit molecules'"),
      domain: z.string().optional().describe("Optional domain filter: original, math, formal, physics, quantum, chemistry, biology, data-science, research"),
    },
    async ({ query, domain }) => {
      const results = searchSkills(index, query, domain);
      if (results.length === 0) {
        return { content: [{ type: "text", text: `No skills found for "${query}"${domain ? ` in domain "${domain}"` : ""}.` }] };
      }
      const lines = results.map(r =>
        `**${r.name}** [${r.domain}]\n  ${r.description}\n  Path: skills/${r.path}`
      );
      return { content: [{ type: "text", text: `Found ${results.length} skill(s):\n\n${lines.join("\n\n")}` }] };
    }
  );

  // Tool 3: Get full skill content
  server.tool(
    "get_stem_skill",
    "Load the full content of a specific STEM skill file. Use after search_stem_skills to load the detailed rules and formulas.",
    {
      name: z.string().describe("Skill name (e.g. 'astropy', 'pymc', 'lean-theorem-proving') or file path (e.g. 'quantum/cirq.md')"),
    },
    async ({ name }) => {
      // Try exact name match first
      let skill = index.find(s => s.name === name || s.file === name || s.path === name);

      // Try partial match
      if (!skill) {
        const lower = name.toLowerCase();
        skill = index.find(s =>
          s.name.toLowerCase().includes(lower) ||
          s.file.toLowerCase().includes(lower) ||
          s.path.toLowerCase().includes(lower)
        );
      }

      if (!skill) {
        const available = index.map(s => s.name).join(", ");
        return { content: [{ type: "text", text: `Skill "${name}" not found.\n\nAvailable skills: ${available}` }] };
      }

      return {
        content: [{
          type: "text",
          text: `# ${skill.name} [${skill.domain}]\n\n${skill.content}`,
        }]
      };
    }
  );

  // Tool 4: Domain router — tell Claude which skill to use for a problem
  server.tool(
    "route_stem_problem",
    "Given a STEM problem description, identify the correct domain and suggest the most relevant skills to load.",
    {
      problem: z.string().describe("Description of the STEM problem or question"),
    },
    async ({ problem }) => {
      const lower = problem.toLowerCase();

      // Domain routing heuristics
      const routes = [];

      if (/quantum circuit|qubit|gate|entangle|superposition|qiskit|cirq|pennylane|qutip/i.test(problem))
        routes.push({ domain: "quantum", reason: "quantum computing keywords detected" });

      if (/molecule|smiles|drug|ligand|rdkit|deepchem|reaction|synthesis|molar|bond/i.test(problem))
        routes.push({ domain: "chemistry", reason: "chemistry/cheminformatics keywords detected" });

      if (/dna|rna|protein|sequence|gene|cell|blast|fastq|rna-seq|single.cell|biopython/i.test(problem))
        routes.push({ domain: "biology", reason: "biology/bioinformatics keywords detected" });

      if (/star|galaxy|cosmol|redshift|fits|telescope|astropy|parsec|flux|spectrum|celestial/i.test(problem))
        routes.push({ domain: "physics", reason: "astronomy/astrophysics keywords detected" });

      if (/fluid|navier.stokes|turbulence|reynolds|cfd|vortex|viscosity.*flow/i.test(problem))
        routes.push({ domain: "physics", reason: "fluid dynamics keywords detected" });

      if (/ode|pde|differential equation|eigenvalue|matrix|linear algebra|fourier|laplace transform/i.test(problem))
        routes.push({ domain: "math", reason: "advanced mathematics keywords detected" });

      if (/lean|theorem|proof|sat solver|smt|z3|constraint satisfaction/i.test(problem))
        routes.push({ domain: "formal", reason: "formal methods keywords detected" });

      if (/bayesian|mcmc|prior|posterior|distribution|hypothesis test|regression|p.value/i.test(problem))
        routes.push({ domain: "data-science", reason: "statistics/data science keywords detected" });

      if (/literature|paper|hypothesis|experiment|write.*paper|methodology|peer review/i.test(problem))
        routes.push({ domain: "research", reason: "scientific research keywords detected" });

      if (routes.length === 0) {
        // Fallback: search by the problem text
        const results = searchSkills(index, problem).slice(0, 3);
        if (results.length > 0) {
          routes.push(...results.map(r => ({ domain: r.domain, skill: r.name, reason: `matched by search (score ${r.score})` })));
        } else {
          return { content: [{ type: "text", text: "Could not automatically route this problem. Use search_stem_skills to find relevant skills manually." }] };
        }
      }

      // For each matched domain, find top skills
      const suggestions = [];
      for (const route of routes) {
        const domainSkills = searchSkills(index, problem, route.domain).slice(0, 2);
        if (domainSkills.length > 0) {
          suggestions.push(`**Domain: ${route.domain}** — ${route.reason}\nSuggested skills: ${domainSkills.map(s => s.name).join(", ")}`);
        } else {
          suggestions.push(`**Domain: ${route.domain}** — ${route.reason}\nUse list_stem_domains to see available skills.`);
        }
      }

      return { content: [{ type: "text", text: suggestions.join("\n\n") }] };
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
