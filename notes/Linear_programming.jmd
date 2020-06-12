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

### **Basic solution in standard form**

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

## **Simplex method**

In this section, we will develop the simplex algorithm for a Linear Program in standard-form \eqref{standard_form}, where $\mA \in \R^{m\times n}$. Throughout this section. we will assume that 

1. $\mA$ has full row rank (no redundant rows).

2. the LP is feasible

3. all basic feasible solution (i.e. extreme points) are nondegenerate.

Let $\vx \in \setP = \{\vx\ |\ \mA\vx = \vb, \vx\geq \vzero\}$ be a feasible point. We say a direction $\vd$ is feasible at $\vx$ if there exists a scalar $\alpha>0$ such that $\vx+\alpha\vd \in \setP$. The following subsections will outline the process for choosing a feasible direction and appropriate stepsize $\alpha$. The simple algorithm initializes at a basic feasible solution. We will also look at how to choose such an initialization.

### **Construction feasible direction**

The goal of finding a feasible direction is to find a vector $\vd$ such that given $\vx \in \setP$, we have that $\vx+\alpha\vd$ is also in the polyhedron $\setP$ for some $\alpha> 0$. Precisely, this implies 

\begin{equation}
\vb = \mA(\vx+\alpha\vd) = \mA\vx + \alpha\mA\vd = b +\alpha \mA\vd.
\end{equation}

Thus, the feasible direction must be in the null space of $\mA$ and satisfy $\mA\vd =\vzero$. Let $\vx$ be a basic feasible solution. So, after some permutation, the following relation holds: $\mA\vx = \begin{bmatrix}\mB&\mN\end{bmatrix}\begin{bmatrix}\vx_B\\ \vx_N\end{bmatrix} = \vb$. Correspondingly, we also have

\begin{equation}
\vzero = \mA \vd = \begin{bmatrix}\mB&\mN\end{bmatrix}\begin{bmatrix}\vd_B\\ \vd_N\end{bmatrix}  = \mB\vd_B + \mN\vd_N.
\end{equation}

Thus, we have 

\begin{equation}\label{feasible_direction}
\mB\vd_B = -\mN\vd_N.
\end{equation}

Note that here $\mB \in \R^{m\times m}$ is non-singular and $N \in \R^{m\times (n-m)}$. We can now choose a feaible direction by fixing an index $\eta_k \in N$, which determines a single nonbasic direction to move along. So, the feasible direction $\vd$ corresponding to a nonbasic variable with index $\eta_k$ satisfies:

\begin{equation}
\vd_N = \ve_k \quad\text{ and } \quad\mB\vd_b = -\mN\vd_N = -\va_{\eta_k},
\end{equation}

where $\va_{\eta_k}$ is a column of $\mA = \begin{bmatrix}\mB & \mN\end{bmatrix}$ corresponding to index $\eta_k \in N$.

### **Reduced cost**

The goal is to choose a feasible direction $\vd$ in such a way that it reduces the cost function (objective) $\phi(\vx) : = \vc\trans(\vx)$. Let $\bar{\vx} = \vx +\alpha \vd$, where $\vx$ is some basic feasible solution and $\alpha>0$. Consider the objective value at the next iterate $\vx + \alpha \vd$ given by

$$
\begin{align}
\phi(\vx + \alpha \vx) & = \vc\trans\bar{\vx}\nonumber\\
& = \vc\trans(\vx + \alpha \vd)\nonumber\\
& = \vc\trans\vx + \alpha \vc\trans\vd\nonumber\\
& = \phi(\vx) + \alpha (\underbrace{\vc_B\trans\vd_B + \vc_N\trans \vd_N}_{=: I})\label{obj_decrease}
\end{align}.
$$

The term $I$ in the above equation is related to the reduced cost. Recall that the feasible direction satfies \eqref{feasible_direction}. So if feasible direction does note move along an index in the nonbasic set, i.e. $\vd_N = \vzero$ then this necessarily means that $\vd_B = 0$. This is beacause $\vd_N = \vzero$ implies $\mB\vd_B = 0$. Since $\mB$ is invertible, the null space of $\mB$ is trivial and, consequently, $\mB\vd_B = 0$ necessarily imples $\vd$ is the zero vector. So, the term $I= \vc_B\trans\vd_B + \vc_N\trans \vd_N$ is zero for any feasible direction not aligned with a nonbasic variable. This leads to the following notion of reduced cost where we only consider directions along the nonbasic variable.

For $j \in N$, let 

$$z_j = \vc_B\trans\vd_B + \vc_N\trans \ve_j = \vc_B\trans\vd_B + c_j.$$ 

Additionally, \eqref{feasible_direction} implies that $\vd_B = -\mB^{-1} \va_j$. So, we have $z_j = -\vc_B \mB^{-1} \va_j + c_j$. Recall from \eqref{obj_decrease}, the objective function decrease with $\vd = \begin{bmatrix}\vd_B\\ \vd_N\end{bmatrix} = \begin{bmatrix}\vzero\\ \ve_j\end{bmatrix}$ as a descent direction if $z_j < 0$. We gather $z_j$ for all $j \in N$ and call this vector the reduced cost. So the reduced cost vector is $\vz \in \R^{|N|}$ with 

$$z_j = -\vc_B \mB^{-1} \va_j + c_j$$

and $|N|$ is the cardinality of the nonbasic set. We now state the Theorem for optimality of a basic feasible point.

**_Theorem_** Consider a basic feasible solution $\vx$ with a reduced cost $\vz$. The following holds true:

1. If $\vz \geq 0$ then $\vx$ is optimal.

2. If $\vx$ is optimal and nondegenerate then $\vz \geq \vzero$.

### **Choosing a stepsize**

Let $\vz$ be the reduced cost at a basic feasible solution $\vx$. Note that the change objective for moving in the $p$the nonbasic variable with index $\eta_p\in N$ is

$$\bar{\phi} = \phi + \alpha z_{\eta_p},$$

where $\bar{\phi}$ is the objective value at the next iterate and $\phi$ is the objective value at the current iterate. We will assume atleast one of the $z_i$'s satisfy $z_i <0$ (otherwise, the basic feasible solution is the optimal point). The idea for choosing a stepsize is to find 

$$\alpha^* = \max\{\alpha\geq 0 \ | \vx + \alpha\vd \geq 0\}$$

There are two possible cases:

1. If $\vd\geq \vzero$, then $\vd$ is an unbounded feasible direction of descent, i.e.

    $$ x+\alpha\vd \geq \text{ for all } \alpha\geq 0.$$

    In this case, the optimal value for the LP is unbounded.

2. If $d_j \leq 0$ for some $j$, then $\vx+\alpha\vd \geq \vzero$ only if 

    $$ \alpha -\frac{x_j}{d_j} \text{ for every } d_j <0.$$

    If we choose $\alpha^*$ acording to the following ratio test

    $$ \alpha^* = \min_{j\in \{j\in B| d_j<0\}} -\frac{x_j}{d_j},$$

    then $\vx+\alpha^*\vd \geq \vzero$ is satisfed and $\alpha^*$ is the largest stepsize that can be used without violating the feasiblity condition.









