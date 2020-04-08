# **Linear Programming**

Linear programming solves the following minimization program

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

## **Standard-form polyhedra**

In this section, we will outline the steps for converting a generic polyhedorn $\{\tilde{\vx}\ | \ \tilde{\mA}\tilde{\vx} = \tilde{\vb},\ \tilde{\mC}\tilde{\vx} \leq \tilde{\vd}\}$ into the standard-form. The standard-form of a polyhedron is 

\begin{equation}\label{standard_form}
\setP = \{\vx\ | \ \mA\vx = \vb, \vx\geq 0\}, \text{ where }  \vb \geq 0. 
\end{equation}

The steps for converting to $\setP$, where $\mA$ is some $m$ by $n$ matrix with $m\leq n$, are elementary and stated below:

1. **Free variable:** A variable $\tilde{\vx}_i$ is called a free variable if it has no constraints. Since every variable must be nonnegative in standard form, and there are no free variable, these variables must be converted. Every free variable $\tilde{\vx}_i$ is replaced with two new nonnegative variables $\tilde{\vx}^{'}_i$ and $\tilde{\vx}^{''}_i$ with 

    \begin{equation}
    \tilde{\vx}_i = \tilde{\vx}^{'}_i - \tilde{\vx}^{''}_i.
    \end{equation}

    Here, $\tilde{\vx}^{'}_i$ encodes the positive part of $\tilde{\vx}_i$ and $\tilde{\vx}^{''}_i$ encodes the negative part of $\tilde{\vx}_i$.

2. For $\tilde{b}_i < 0$, we replace $\tilde{a}_i\trans\tilde{\vx} = \tilde{b}_i$ with $(-\tilde{a}_i)\trans\tilde{\vx} = -\tilde{b}_i$. Similarly, For $\tilde{d}_i < 0$, we replace $\tilde{c}_i\trans\tilde{\vx} \leq \tilde{d}_i$ with $(-\tilde{c}_i)\trans\tilde{\vx} \geq -\tilde{d}_i$ and we replace $\tilde{c}_i\trans\tilde{\vx}\geq \tilde{d}_i$ with $(-\tilde{c}_i)\trans\tilde{\vx} \leq -\tilde{d}_i$.

3. **Surplus and Slack:** After the right hand side of the inequality constarint satisfy nonnegativity constraint, these need to be converted to equality constraints. This is done by adding a surplus or slack variable. For inequality constrains of the form $\tilde{\vc}_i\trans\tilde{\vx}_i \leq \tilde{\vd}_i$, we introduce a new slack variable $s_i$ and replace the inequality with the following two constraints:  $\tilde{\vc}_i\trans\tilde{\vx}_i + s_i = \tilde{\vd}_i$ and $s_i\geq 0$. Similarly, if $\tilde{\vc}_i\trans\tilde{\vx}_i \geq \tilde{\vd}_i$, we introduce a surplus variable.

## **Basic solution in standard form**

Recall that $\vx^* \in \R^n$ is a basic solution if the vectors $\va_i$ for $i \in \setB(\vx^*)$ are linearly indenpendent and rank$(\mA_{\setB(\vx^*)}) = n$. In standard form, there are $n$ variables, i.e. $x_1,\dots,x_n$, $m$ equality constraints, and $n$ inequality constraints. Since the basic set $\setB(\vx^*)$ for any basic solution $\vx^*$ must have exactly n elements, exactly n of the $m+n$ constraints are active at $\vx^*$. The $m$ equality constraints are always satisfied, thus exactly $n-m$ of the $n$ inequality constraints $x_i\geq 0$ should be active at $\vx^*$. This corresponds to eleminating $n-m$ columns of $\mA$ and choosing the remaining $m$ columnns.

Additionally, these $m$ columns corresponding to a basic solution $\vx^*$ are linearly independent. So, there exists a permutation matrix $\mP$ such that

\begin{equation}
\mA\mP = \begin{bmatrix}\mB &\mN \end{bmatrix},
\end{equation}

where $\mB$ is a nonsingular matrix. Let $\bar{\mA} = \begin{bmatrix}\mB & \mN\\ & \mI\end{bmatrix}$ and $\bar{\vx} = \mP\trans\vx^*$. So, 

\begin{equation}
\bar{\mA} \bar{\vx} = \begin{bmatrix}\mB & \mN\\ & \mI\end{bmatrix}\begin{bmatrix}\bar{\vx}_B \\ \bar{\vx}_N\end{bmatrix} = \begin{bmatrix} \vb \\ \vzero \end{bmatrix},
\end{equation}

which implies that the basic solution satifes $\mB\bar{\vx}_B = \vb$ and $\bar{\vx}_N = \vzero$.















