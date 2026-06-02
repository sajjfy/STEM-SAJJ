# Reddit Post — r/ClaudeAI

**Title:** I built a STEM expert plugin for Claude Code — 60+ skills across Physics, Quantum, Chemistry, Biology, Maths and more (free, open source)

---

**Body:**

Hey r/ClaudeAI,

I've been using Claude Code for STEM work and wanted something that would make Claude genuinely expert-level across all the sciences — not just vague answers, but full step-by-step working with units, formulas stated before use, and answers checked via dimensional analysis.

So I built **Sajj STEM** — a Claude Code plugin with 60+ specialist skills across 9 domains.

**What it does:**

When you type `/sajj-stem`, Claude becomes a step-by-step STEM expert that:
- States the formula before applying it every time
- Shows full working with SI units at each step
- Identifies the domain (physics, chemistry, quantum, etc.) before solving
- Checks answers via dimensional analysis and sanity checks
- Has specialist knowledge for tools like Astropy, Qiskit, RDKit, BioPython, PyMC, SymPy, and more

**Skills included (free):**

| Domain | Tools / Topics |
|--------|---------------|
| Physics | Applied mechanics, fluids, thermodynamics, EM, waves + Astropy + Fluidsim |
| Quantum | Dirac notation, gates, density matrices + Cirq, Qiskit, PennyLane, QuTiP |
| Chemistry | RDKit, DeepChem, COBRApy (metabolic modelling), PyMatGen |
| Biology | BioPython, Scanpy (scRNA-seq), NeuROKit2 (ECG/EEG), scvi-tools |
| Maths | Diff equations, numerical methods, probability, optimisation, abstract algebra, topology, category theory |
| Formal methods | Lean 4, SAT/SMT, Z3, CSP solving |
| Data science | SymPy, PyMC (Bayesian), PyMoo (multi-objective optimisation), NetworkX |
| Research | Scientific writing, critical thinking, hypothesis generation, literature review |
| Engineering | Structural analysis, ODEs, Fourier, signal processing |

**It also has a built-in MCP server** with 4 tools: `search_stem_skills`, `get_stem_skill`, `list_stem_domains`, `route_stem_problem` — so Claude can load skills on demand without dumping everything into context at once.

**Install:**
```bash
claude plugin marketplace add https://github.com/sajjfy/STEM-SAJJ
claude plugin install sajj-stem
```
Then restart Claude Code and type `/sajj-stem`.

**Example questions it handles well:**
- *"A 5kg ball rolls without slipping down a 20° incline — find speed at bottom"*
- *"Build a Bell state circuit in Cirq and sample 1000 times"*
- *"Load aspirin SMILES in RDKit and calculate LogP, TPSA, MW"*
- *"Set up a Bayesian linear regression in PyMC with weakly informative priors"*
- *"Find eigenvalues of [[3,1],[1,3]] and interpret geometrically"*
- *"What is the time evolution of |ψ⟩ = (|0⟩+|1⟩)/√2 under H = ℏω σ_z?"*

Repo: https://github.com/sajjfy/STEM-SAJJ

Happy to answer questions — still adding more skills. What STEM domains would you most want covered?

---

# Cross-post versions

## r/MachineLearning title:
"Claude Code plugin with specialist ML/science skills — RDKit, Qiskit, BioPython, PyMC, SymPy, Lean 4 and 50+ more (free)"

## r/Physics title:
"Built a Claude Code plugin that makes Claude a proper step-by-step physics solver — covers mechanics, EM, quantum, fluids, thermodynamics, astropy and more"

## r/learnmath title:
"Free Claude Code plugin for maths — covers differential equations, numerical methods, probability, abstract algebra, topology, category theory, formal theorem proving (Lean 4)"

## r/bioinformatics title:
"Claude Code STEM plugin with specialist bioinformatics skills — BioPython, Scanpy, scvi-tools, NeuROKit2, scikit-bio (free, open source)"
