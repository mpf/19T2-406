# **Non-linear least squares**

The non-linear least squares problem is

$$
\min_{\vx\in\R^n} \frac{1}{2}\|r(\vx)\|_2^2,
$$

where $r:\R^n→\R^m$ is the residual vector. The $i$th component of residual vector is $r_{i}(\vx):\R^n→\R$. The non-linear
least squares problem reduces to the linear least squares problem if $r$ is affine, i.e. $r(\vx) = \mA\vx-\vb$.

**Example: Position estimation from ranges** 

 <center>
<img src="../img/lec5/sensor_localization.png" width = "200">
</center>

Let $\vx \in \R^2$ be an unknown vector. Fix $m$ beacon positions $\vb_{i} \in \R^2,\ i = 1,\dots,m$. 
Suppose we have noisy measurements $\vrho \in \R^m$ of $2$-norm distance between a becon $\vb_{i}$ and the unknown 
signal $\vx$, i.e.

$$
ρ_{i} = \|\vx- \vb\|_2 + ν_i \quad \text{for } i=1,\dots,m.
$$
Here, $\vnu \in \R^m$ is noise/measurement error vector. The position estimation from ranges problem is to estimate 
$\vx$ given $\vrho$ and $\vb_i, \ i = 1,\dots, m$.

A natural approach to solve this problem is by finding $\vx$ that minimizes $\sum_{i=1}^m(ρ_{i} - \|\vx- \vb\|_2)^2$. 
Define $r_i(\vx) := ρ_{i} - \|\vx- \vb\|_2$. Then we can estimmate $\vx$ by solving the non-linear least squares problem

$$
\min_{\vx\in \R^n} \frac{1}{2}\|r(\vx)\|_2^2.
$$

In contrast to linear least squares program, the non-linear least squares program generally contain both global and local
minimizers. We can will use the following approach to find a minimizer of NLLS.

----
**Gauss-Newton method for NLLS**

Given starting guess $\vx^{(0)}$ <br>
Repeat until covergence:<br>

1. linearize $r(x)$ near current guess $\bar{\vx} = \vx^{k}$
2. solve a linear least squares problem to get the next guess $\vx^{k+1}$,

----

## **Linearization of residual**



