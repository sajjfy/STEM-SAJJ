---
name: premium-quantum-hardware
tier: pro
description: Real quantum hardware workflows — IBM, Google, IonQ. Noise mitigation, error correction basics, circuit optimisation for NISQ devices
---

# Quantum Hardware Industry Pack
*Premium — Pro tier*

## What's Inside

### 1. IBM Quantum (Qiskit)
- Account setup, backend selection, queue management
- Transpilation for real hardware native gates (CX, RZ, SX, X)
- Reading calibration data: T1, T2, gate error rates
- Primitive-based workflows (Estimator, Sampler)

### 2. Google Quantum (Cirq)
- GridQubit layout matching real Sycamore topology
- Cirq → OpenQASM → hardware submission
- Noise models from device spec sheets

### 3. Noise Mitigation Techniques
- Zero-noise extrapolation (ZNE) with Mitiq
- Probabilistic error cancellation
- Measurement error mitigation via calibration matrix

### 4. NISQ Algorithm Patterns
- VQE ansatz design for molecule simulation
- QAOA for combinatorial optimisation
- Barren plateau detection and avoidance

## Preview — Noise-Aware Circuit

```python
import cirq
from cirq_google import Sycamore

# Build noise-aware Bell state
q0, q1 = cirq.GridQubit(4, 4), cirq.GridQubit(4, 5)
circuit = cirq.Circuit([
    cirq.H(q0),
    cirq.CNOT(q0, q1),
    cirq.measure(q0, q1, key='result')
])

# Apply depolarising noise model
noise = cirq.ConstantQubitNoiseModel(cirq.depolarize(p=0.001))
noisy_sim = cirq.DensityMatrixSimulator(noise=noise)
result = noisy_sim.run(circuit, repetitions=1000)
print(result.histogram(key='result'))
```

---

*Full pack includes IBMQ account setup guide, real hardware job scripts, and noise benchmarking suite*
