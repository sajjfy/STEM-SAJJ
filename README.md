# 🧮 Sajj STEM Plugin

**Author:** Sajifal Sulaiman  
**Version:** 1.0.0  
**Repository:** https://github.com/sajifalsulaiman124-dot/sajj-stem

A comprehensive STEM expert plugin for Claude Code covering Physics, Mathematics, Engineering, Design, and Quantum domains.

---

## 📦 Skills Included

| Skill | Topics |
|-------|--------|
| **Applied Physics** | Mechanics, Fluids, Thermodynamics, Electromagnetism, Waves, Modern Physics |
| **Linear Algebra** | Matrices, Eigenvalues, Vector Spaces, SVD, LU Decomposition |
| **Quantum Mathematics** | Dirac Notation, Schrödinger Equation, Quantum Gates, Density Matrices |
| **Engineering Math** | Structural Analysis, ODEs, Laplace, Fourier, Numerical Methods |
| **Geometry** | 2D/3D Shapes, Trigonometry, Vectors, Transformations |
| **Design Mathematics** | UI/UX, Industrial Design, Mechanical Design Math |

---

## 🚀 Installation

```bash
claude plugin install https://github.com/sajifalsulaiman124-dot/sajj-stem
```

---

## 💡 Usage Examples

Once installed, just ask naturally:

- *"A beam of 6m with a 500N load at midpoint — find reactions at supports"*
- *"Find eigenvalues of matrix [[3,1],[1,3]]"*
- *"What is the time evolution of a qubit |ψ⟩ = α|0⟩ + β|1⟩ under Hamiltonian H?"*
- *"Design a UI grid layout for a 1440px wide dashboard"*
- *"Calculate the Reynolds number for water flowing at 2 m/s in a 0.05m pipe"*

---

## 📁 File Structure

```
sajj-stem/
├── plugin.md                  ← Main plugin entry point
├── README.md                  ← This file
└── skills/
    ├── applied-physics.md
    ├── linear-algebra.md
    ├── quantum.md
    ├── engineering-math.md
    ├── geometry.md
    └── design-math.md
```

---

## 🔧 How It Works

Claude reads `plugin.md` which includes all skill files via `@include` directives. Each skill file contains domain-specific rules, formulas, and behaviour instructions that Claude applies when solving problems in that area.

---

## 📝 License

MIT License — free to use, modify, and share.
