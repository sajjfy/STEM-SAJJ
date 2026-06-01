---
name: premium-bayesian-deep-dive
tier: pro
description: Complete Bayesian workflow from prior specification to posterior predictive checks — hierarchical models, model comparison, and production deployment
---

# Bayesian Inference Deep Dive
*Premium — Pro tier*

## What's Inside (beyond the free pymc.md skill)

### 1. Prior Elicitation
- Weakly informative vs informative priors
- Prior predictive simulation to validate priors before fitting
- Half-Normal, LKJ, Dirichlet — when and why

### 2. Hierarchical (Multi-Level) Models
- Partial pooling vs no-pooling vs complete pooling
- School test scores example: group-level + individual-level
- Varying intercepts and varying slopes

### 3. Model Comparison
- WAIC and LOO-CV with ArviZ
- Bayes factors: when they work and when they don't
- Posterior predictive checks (PPC) as primary validation tool

### 4. MCMC Diagnostics
- R-hat convergence: must be < 1.01
- Effective sample size (ESS): bulk and tail
- Divergences: what they mean, how to fix them (reparameterisation)
- Trace plots, forest plots, pair plots

### 5. Production Deployment
- Exporting posterior samples for downstream use
- Online Bayesian updating (sequential analysis)
- Approximate Bayesian Computation (ABC) for intractable likelihoods

## Preview — Hierarchical Model

```python
import pymc as pm
import numpy as np

# 8 schools problem (classic hierarchical example)
y = np.array([28, 8, -3, 7, -1, 1, 18, 12])    # treatment effects
sigma = np.array([15, 10, 16, 11, 9, 11, 10, 18]) # standard errors

with pm.Model() as schools_model:
    # Hyperpriors
    mu    = pm.Normal('mu', mu=0, sigma=10)
    tau   = pm.HalfNormal('tau', sigma=10)

    # Non-centred parameterisation (avoids divergences)
    theta_offset = pm.Normal('theta_offset', mu=0, sigma=1, shape=8)
    theta = pm.Deterministic('theta', mu + tau * theta_offset)

    # Likelihood
    obs = pm.Normal('obs', mu=theta, sigma=sigma, observed=y)

    # Sample
    trace = pm.sample(2000, tune=1000, target_accept=0.9, return_inferencedata=True)

pm.plot_posterior(trace, var_names=['mu', 'tau'])
```

---

*Full deep dive: 600+ lines of annotated code, 12 real-world case studies, and a model comparison cheat sheet*
