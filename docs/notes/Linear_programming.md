# **Linear Programming**

Linear programming solves the following minimization programm

\begin{equation}\label{non_stand_LP}
\min_{\vx\in\R^n} \vc\trans\vx \text{ subject to } \mA\vx\leq \vb,
\end{equation}

where $\mA \in \R^{m\times n}$, $\vc \in \R^n$, and $\vb \in \R^m$ are known a priori. In general, the optimization problem \eqref{non_stand_LP} has three possibilities:

1. The problem is infeasible, i.e. there exist no such $\vx \in \R^n$ such that $\mA\vx \leq \vb$.

2. The problem is unbounded from below, i.e. there exist some $\vx = \vx_0 +\alpha \vd$ where $\mA\vx \leq \vb$ for all $\alpha\geq 0$, and $\vc\trans \vx < 0$. In this case $\vd$ is a direction that pushes the objective value to $-∞$ while maintaining feasibility.

3. The problem is feasible and has a finite minimum, i.e. there exist a point $\vx$ such that $\mA\vx\leq \vb$ and the optimal value of \eqref{non_stand_LP} $p^* = \min\{\vc\trans\vx | \mA\vx\leq \vb\}$ satisfies $p^*>-∞$.

In this lecture, we will assume the problem is always feasible and characterize the optimal points of \eqref{non_stand_LP}.

## **Extreme points**

The constraint set in the linear program \eqref{non_stand_LP} is $\setP := \{x\in \R^n | \va_i\trans\vx \leq b_i,\ i = 1\,\dots, m\}$. This set is the intersection of $m$ half-spaces given by $\va_i\trans\vx \leq b_i$ and form a polyhedron (see figure below).

<center>
<img src="../figures/polyhedron.svg" width = "400">
</center>

Extreme points can be studied in many equivalent ways. A definition of extreme point is:

**_Definition_** A point $\vx \in \setP$ is an extreme point of $\setP$ if there does not exist two vectors $\vy,\vz \in \setP$ such that $\vx = \lambda \vy + (1-\lambda)\vz$ for any $\lambda \in (0,1)$. 

This definition states that an extreme point can not be in the interior of any line segment contained in the polyhedron. Another geometric way to view extreme points is via vertices of a polyhedron. A point $\bar{\vx}$ is an extreme point of a polyhedron if and only if $\bar{\vx}$ is an vertex. The vertex of a polyhedron is defined as:

**_Definition_** A point $\vx \in \setP$ is a vertex of $\setP$ if there exists a vector $\vc$ such that $\vc\trans\vx <\vc\trans\vy$ for all $\vy\in\setP$ with $\vy\neq \vx$.

<center>
<img src="../figures/vertex.png" width = "400">
</center>

We will consider yet another view of the extreme point that depends number of half-space constraints active as a strict equality. This will be useful when studying the simplex algorithm, which can be used to solve \eqref{non_stand_LP}. Let $\setB \subset \{1,\dots,m\}$ be a set of row indices of the matrix $\mA$. Let $\mA_\setB$ be the sub-matrix of $\mA$ containing the rows indexed in $\setB$. Consider a point $\vx \in \setP$. Note that there exists an index set $\setB(\vx)\subset \{1,\dots,m\}$ such that 

\begin{align}
&\va_i\trans\vx = b_i \text{ for all } i\in \setB(\vx), \text{ and }\label{eq:boundary}\\
&\va_i\trans\vx < b_i \text{ for all } i\in\setN :=\{1,\dots,m\}\backslash \setB(\vx). \label{eq:interior}
\end{align}

The index set $\setB$ is called the active set and $\setN$ is called the inactive set (if $\setB(\vx)$ is empty, then $\vx$ is in the interior of the polyhedron). 

**_Definition_** A point $\vx \in \setP$ is called a basic feasible solution if the vectors $\va_i$ for $i \in \setB(\vx)$ are linearly independent and rank($\mA_{\setB(\bar{\vx})}) = n$.

We now state a theorem that relates extreme points, vertices and basic feasible solutions.

**_Theorem_** The following are equivalent:

1. $\vx^*$ is an extreme point.

2. $\vx^*$ is a vertex.

3. $\vx^*$ is a basic feasible solution.




We now state an interesting property of every feasible Linear program that characterizes its optimal points.

**_Theorem_** Let $p^*$ be the optimal value of the LP \eqref{non_stand_LP}. There exists a feasible extreme point $\vx^*$ where $\vc\trans\vx^* = p^*$.

**_Proof_** Suppose $\vc\trans\hat{\vx} = p^*$, but $\hat{\vx}$ is not an extreme point. Then the basic set $\setB(\hat{\vx}) = \{ i \ |\ \va_i\trans\hat{\vx} = b_i\}$ has few than $n$ indices. So, the sub-matrix $\mA_{\setB(\hat{\vx})}$ has a non-trivial null-space. Pick some $\vv$ in that null-space. Then either $\vc\trans\vv = 0$ or $\vc\trans\vv \neq 0$. 

We will now proceed by considering possible cases. Suppose $\vc\trans\vv <0$ and consider $\tilde{\vx} = \hat{\vx} + \alpha \vv$.  Note that for all $\alpha>0$, we have $\vc\trans\hat{\vx} >\vc\trans\tilde{\vx}$ and $\mA_{\setB(\hat{\vx})}\hat{\vx} = \mA_{\setB(\hat{\vx})}\tilde{\vx}$. Additionally, since we have $\mA_{\setN(\hat{\vx})}\hat{\vx} < \vb_{\setN(\hat{\vx})}$, there exists an $\alpha >0$ such that $\mA_{\setN(\hat{\vx})}\tilde{\vx} \leq \vb_{\setN(\hat{\vx})}$. Thus, $\hat{\vx}$ is not an optimal point, which is a contradiction. The case with $\vc\trans\vv >0$ is similar.

Lastly, suppose $\vc\trans\vv = 0$. Then any adjacent extreme point is equally optimal (why?).







