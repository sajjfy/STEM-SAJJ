# Sajj STEM Plugin

**Author:** Sajifal Sulaiman
**Version:** 2.0.0
**Repository:** https://github.com/sajifalsulaiman124-dot/STEM-SAJJ
**License:** MIT

A comprehensive STEM expert plugin for Claude Code — 60+ skills across 9 domains covering Physics, Quantum Computing, Chemistry, Biology, Mathematics, Engineering, Design, Data Science, and Scientific Research.

---

## Installation

```bash
claude plugin install https://github.com/sajifalsulaiman124-dot/STEM-SAJJ
```

After installing, activate the full STEM mode in any conversation:

```
/sajj-stem
```

---

## What It Does

When activated, the plugin turns Claude into a step-by-step STEM expert that:

- Always states the formula or method before applying it
- Shows full working with units at every step
- Identifies the domain (physics, chemistry, biology, etc.) before solving
- Routes problems to the correct specialist skill automatically
- Checks answers via dimensional analysis and sanity checks
- Uses SI units by default (m, kg, s, N, Pa, J, W)
- Reports results to 3 significant figures unless specified otherwise

---

## Skill Index

### Original Skills — `skills/original/`

| Skill | Topics |
|-------|--------|
| `applied-physics.md` | Mechanics, Fluids, Thermodynamics, Electromagnetism, Waves, Modern Physics |
| `linear-algebra.md` | Matrices, Eigenvalues, Vector Spaces, SVD, LU, Gram-Schmidt |
| `quantum.md` | Dirac Notation, Schrödinger Equation, Density Matrices, Quantum Gates |
| `engineering-math.md` | Structural Analysis, ODEs, Laplace Transforms, Fourier, Signal Processing |
| `geometry.md` | 2D/3D Shapes, Trigonometry, Vectors, Coordinate Geometry, Transformations |
| `design-math.md` | UI/UX Layout Math, Industrial Design, Mechanical Design, Golden Ratio |

---

### Advanced Mathematics — `skills/math/`
> Extracted from [cc-polymath](https://github.com/rand/cc-polymath)

| Skill | Topics |
|-------|--------|
| `differential-equations.md` | ODEs, PDEs, RK4, Phase Plane, Stability Analysis |
| `linear-algebra-computation.md` | Ax=b Systems, Gaussian Elimination, Decompositions |
| `numerical-methods.md` | Root Finding, Numerical Integration, Interpolation, Error Analysis |
| `probability-statistics.md` | Distributions, Bayes, Hypothesis Testing, Regression, CLT |
| `optimization-algorithms.md` | Gradient Descent, Convex Optimisation, LP, Newton's Method |
| `abstract-algebra.md` | Groups, Rings, Fields, Galois Theory, Homomorphisms |
| `number-theory.md` | Primes, Modular Arithmetic, CRT, Cryptographic Applications |
| `set-theory.md` | ZFC Axioms, Cardinals, Ordinals, Axiom of Choice |
| `topology-point-set.md` | Metric Spaces, Open Sets, Compactness, Continuity, Connectedness |
| `topology-algebraic.md` | Fundamental Groups, Homology, Homotopy, Euler Characteristic |
| `category-theory-foundations.md` | Functors, Natural Transformations, Adjunctions, Yoneda Lemma |

---

### Formal Methods — `skills/formal/`
> Extracted from [cc-polymath](https://github.com/rand/cc-polymath)

| Skill | Topics |
|-------|--------|
| `lean-theorem-proving.md` | Lean 4 Proofs, Type Theory, Curry-Howard |
| `lean-mathlib4.md` | Formalising Mathematics with Mathlib4 |
| `lean-tactics.md` | `simp`, `ring`, `linarith`, `omega`, Tactic Automation |
| `lean-proof-basics.md` | Lean 4 from Scratch, Syntax, Types |
| `sat-solving-strategies.md` | SAT, DPLL, CDCL, Clause Learning |
| `smt-theory-applications.md` | SMT Theories, Arithmetic, Arrays, Bitvectors |
| `z3-solver-basics.md` | Z3 Python API, `Solver()`, `check()`, `model()` |
| `csp-modeling.md` | Constraint Satisfaction, Scheduling, Graph Colouring |
| `constraint-propagation.md` | Arc Consistency, AC-3, Domain Reduction |
| `backtracking-search.md` | MRV Heuristic, Forward Checking, Backtracking |

---

### Physics — `skills/physics/`
> Extracted from [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills)

| Skill | Topics |
|-------|--------|
| `astropy.md` | Celestial Coordinates, FITS Files, Units, Cosmology, Time Scales, WCS |
| `fluidsim.md` | Navier-Stokes 2D/3D, Pseudospectral Methods, Turbulence, HPC/MPI |

---

### Quantum Computing — `skills/quantum/`
> Extracted from [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills)

| Skill | Topics |
|-------|--------|
| `cirq.md` | Quantum Circuits, Simulation, Google Hardware, VQE, QAOA, Noise Modeling |
| `qiskit.md` | IBM Quantum, Circuit Composition, Transpilation, Primitives |
| `pennylane.md` | Quantum ML, Variational Circuits, Parameter-Shift Gradients, PyTorch/JAX |
| `qutip.md` | Quantum Optics, Open Systems, Lindblad Master Equation, Wigner Functions |

---

### Chemistry — `skills/chemistry/`
> Extracted from [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills)

| Skill | Topics |
|-------|--------|
| `rdkit.md` | SMILES/SDF, Descriptors (MW, LogP, TPSA), Fingerprints, Similarity, 3D Gen |
| `deepchem.md` | Molecular ML, GNNs, MoleculeNet, ADMET, Drug Discovery, Scaffold Split |
| `cobrapy.md` | Metabolic Modeling, FBA, FVA, Gene Knockouts, SBML, Systems Biology |
| `pymatgen.md` | Crystal Structures, Space Groups, DFT Interfaces, VASP, Materials Analysis |
| `datamol.md` | Molecular Workflows, Drug-likeness, SMILES Standardisation |

---

### Biology — `skills/biology/`
> Extracted from [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills)

| Skill | Topics |
|-------|--------|
| `biopython.md` | Sequences, NCBI/Entrez, FASTA/GenBank, BLAST, Phylogenetics |
| `scanpy.md` | scRNA-seq, QC, Normalisation, PCA, UMAP, Leiden Clustering |
| `scvi-tools.md` | Probabilistic Single-Cell Models, Batch Correction, Multimodal Integration |
| `neurokit2.md` | ECG, EEG, EDA, RSP, PPG, HRV, Biosignal Processing |
| `scikit-bio.md` | Diversity Metrics, Phylogeny, Sequence Alignments, OTU Tables |

---

### Data Science & Scientific Computing — `skills/data-science/`
> Extracted from [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills)

| Skill | Topics |
|-------|--------|
| `sympy.md` | Symbolic Math, CAS, Differentiation, Integration, LaTeX Output |
| `statsmodels.md` | Regression, Time Series, ANOVA, Hypothesis Tests |
| `pymc.md` | Bayesian Inference, MCMC, Prior/Posterior, NUTS Sampler |
| `pymoo.md` | Multi-Objective Optimisation, NSGA-II, Pareto Front |
| `statistical-analysis.md` | Statistical Workflows, Effect Sizes, Confidence Intervals |
| `scientific-visualization.md` | Publication-Quality Plots, matplotlib, seaborn, colour maps |
| `networkx.md` | Graph Theory, Shortest Paths, Centrality, Community Detection |
| `exploratory-data-analysis.md` | EDA Pipelines, Profiling, Distributions, Correlations, Outliers |

---

### Research Skills — `skills/research/`
> Extracted from [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills)

| Skill | Topics |
|-------|--------|
| `scientific-writing.md` | Paper Structure, Methods, Results, LaTeX, Abstract Writing |
| `scientific-brainstorming.md` | Research Ideation, Interdisciplinary Connections, Gap Analysis |
| `scientific-critical-thinking.md` | Experimental Design, Bias, Reproducibility, Effect Sizes |
| `literature-review.md` | Survey Writing, Citation Strategy, Synthesis, Databases |
| `hypothesis-generation.md` | Falsifiable Hypotheses, Research Questions, Competing Explanations |

---

## Domain Routing

The plugin automatically routes problems to the right skill:

| You ask about... | Skill activated |
|-----------------|-----------------|
| Astronomical data, FITS, cosmology | `physics/astropy` |
| Fluid dynamics, CFD, Navier-Stokes | `physics/fluidsim` |
| Quantum circuits, gates, algorithms | `quantum/cirq` or `quantum/qiskit` |
| Quantum ML, variational circuits | `quantum/pennylane` |
| Quantum optics, open quantum systems | `quantum/qutip` |
| Molecules, SMILES, drug-likeness | `chemistry/rdkit` + `chemistry/datamol` |
| Molecular ML, ADMET prediction | `chemistry/deepchem` |
| Metabolic networks, flux analysis | `chemistry/cobrapy` |
| Crystal structures, materials DFT | `chemistry/pymatgen` |
| DNA/protein sequences, NCBI queries | `biology/biopython` |
| Single-cell RNA-seq analysis | `biology/scanpy` |
| ECG, EEG, biosignal processing | `biology/neurokit2` |
| Symbolic calculus, algebra | `data-science/sympy` |
| Bayesian inference, MCMC | `data-science/pymc` |
| Multi-objective optimisation | `data-science/pymoo` |
| Graph / network analysis | `data-science/networkx` |
| Writing a paper, Methods section | `research/scientific-writing` |
| Designing an experiment | `research/scientific-critical-thinking` |
| ODEs, PDEs, stability analysis | `math/differential-equations` |
| Theorem proving, Lean 4 | `formal/lean-theorem-proving` |
| SAT/SMT solving, Z3 | `formal/smt-theory-applications` |

---

## Repository Structure

```
STEM-SAJJ/
├── plugin.md                          Main plugin entry point & skill index
├── sajj-stem.md                       /sajj-stem slash command (full rules)
├── README.md                          This file
│
└── skills/
    ├── original/                      Core STEM skills (6)
    │   ├── applied-physics.md
    │   ├── linear-algebra.md
    │   ├── quantum.md
    │   ├── engineering-math.md
    │   ├── geometry.md
    │   └── design-math.md
    │
    ├── math/                          Advanced mathematics (11) — cc-polymath
    │   ├── differential-equations.md
    │   ├── linear-algebra-computation.md
    │   ├── numerical-methods.md
    │   ├── probability-statistics.md
    │   ├── optimization-algorithms.md
    │   ├── abstract-algebra.md
    │   ├── number-theory.md
    │   ├── set-theory.md
    │   ├── topology-point-set.md
    │   ├── topology-algebraic.md
    │   └── category-theory-foundations.md
    │
    ├── formal/                        Formal methods & theorem proving (10) — cc-polymath
    │   ├── lean-theorem-proving.md
    │   ├── lean-mathlib4.md
    │   ├── lean-tactics.md
    │   ├── lean-proof-basics.md
    │   ├── sat-solving-strategies.md
    │   ├── smt-theory-applications.md
    │   ├── z3-solver-basics.md
    │   ├── csp-modeling.md
    │   ├── constraint-propagation.md
    │   └── backtracking-search.md
    │
    ├── physics/                       Physics tools (2) — ordinary-claude-skills
    │   ├── astropy.md
    │   └── fluidsim.md
    │
    ├── quantum/                       Quantum computing (4) — ordinary-claude-skills
    │   ├── cirq.md
    │   ├── qiskit.md
    │   ├── pennylane.md
    │   └── qutip.md
    │
    ├── chemistry/                     Chemistry & materials (5) — ordinary-claude-skills
    │   ├── rdkit.md
    │   ├── deepchem.md
    │   ├── cobrapy.md
    │   ├── pymatgen.md
    │   └── datamol.md
    │
    ├── biology/                       Biology & biosignals (5) — ordinary-claude-skills
    │   ├── biopython.md
    │   ├── scanpy.md
    │   ├── scvi-tools.md
    │   ├── neurokit2.md
    │   └── scikit-bio.md
    │
    ├── data-science/                  Data science & computing (8) — ordinary-claude-skills
    │   ├── sympy.md
    │   ├── statsmodels.md
    │   ├── pymc.md
    │   ├── pymoo.md
    │   ├── statistical-analysis.md
    │   ├── scientific-visualization.md
    │   ├── networkx.md
    │   └── exploratory-data-analysis.md
    │
    └── research/                      Scientific research skills (5) — ordinary-claude-skills
        ├── scientific-writing.md
        ├── scientific-brainstorming.md
        ├── scientific-critical-thinking.md
        ├── literature-review.md
        └── hypothesis-generation.md
```

---

## Usage Examples

```
/sajj-stem

> A beam of 6m with a 500N load at midpoint — find reactions at supports
> Find eigenvalues of [[3,1],[1,3]] and interpret geometrically
> Write a Cirq circuit for a Bell state and measure it 1000 times
> Load a SMILES string for aspirin and calculate its LogP and TPSA
> Parse a FASTA file and run a BLAST search against NCBI
> Set up a Bayesian linear regression with PyMC
> What is the time evolution of |ψ⟩ = (|0⟩+|1⟩)/√2 under H = ℏω σ_z?
> Design a hypothesis for why drug X reduces inflammation
> Calculate the luminosity distance to a galaxy at z = 0.5
```

---

## Credits

Skills sourced and adapted from:
- [cc-polymath](https://github.com/rand/cc-polymath) — Advanced math and formal methods skills
- [ordinary-claude-skills](https://github.com/Microck/ordinary-claude-skills) — Scientific computing skills

---

## License

MIT License

Copyright (c) 2026 Sajifal Sulaiman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
