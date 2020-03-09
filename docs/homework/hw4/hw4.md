# **CPSC 406: Homework 4 (Due March  16, 6pm)**

1. Prove that the intersection of convex sets 

    $$
    \mathcal{S} = \mathcal{S}_1\cap \mathcal{S}_2 \cap \cdots \cap \mathcal{S}_n = \{x : x\in \mathcal{S}_1 \text{ and } \mathcal{S}_2 \text{ and } \cdots \text{ and } \mathcal{S}_n\}
    $$

    is itself a convex set.

2. The *second order cone* is the set of tuples $(x\in \R^n, t\in \R)$ 

    $$
    \mathcal{S} = \{(x,t) : \|x\|_2 \leq t\}.
    $$

    Prove that $\mathcal{S}$ is convex.

3. Consider 

    \begin{equation}\label{e-constrained}
    \begin{array}{ll}
    \min_{x}& f(x)\\
    \st & x\in \mathcal C
    \end{array}
    \end{equation}

    where $f(x)$ is a convex and differentiable function, and $\mathcal C$ is a convex set. We know that the projected gradient method converges to an optimal solution, so we know that $x^*$ is optimal if and only if 

    \begin{equation}\label{e-projection}
    x^* = \proj_{\mathcal C}(x^* - \gamma \nabla f(x^*))
    \end{equation}

    for some constant $\gamma > 0$, where the projection itself is an optimization problem:

    $$
    \begin{array}{lll}
    \proj_{\mathcal C}(z) = &\underset{x}{\text{argmin}}
    & \|x - z\|_2^2\\
    &\st & x\in \mathcal C
    \end{array}
    $$

    1. **Nonnegative constraint.** For $\mathcal C = \{x : x_i \geq 0\}$,  prove that \eqref{e-projection} implies $\nabla f(x^*)\geq 0$.
    
    2. **Normal cone.** In general, the optimality condition for \eqref{e-constrained} is that $x^*$ is optimal if and only if
    
    \begin{equation}\label{e-optimality}
    \nabla f(x^*)^T(y-x) \geq 0,\; \forall y\in \mathcal C
    \end{equation}

    In other words, $\nabla f(x^*)$ is in the *normal cone of $\mathcal C$ at point $x^*$*. Show that this property is equivalent to \eqref{e-projection}.

4. . 
    
    1. Let $\mathcal{C} = \{x \in \R^n | Ax = b\}$, where $A \in \R^{m\times n}$ has full row rank. Show that $\proj_{\mathcal C} (z) = z - A\trans(AA\trans)^{-1}(b-Az)$. Hint: decompose $\nabla f(x)$ into two components: $\nabla f(x)$ is in $\range(A^T) \oplus \vnull(A)$.

    2. **Projected gradient descent** The N-variable Rosenbrock test function is

        $$
        f(x) = \sum_{i=1}^{N-1}[100(x_{i+1} - x_{i}^2)^2+(1-x_i)^2].
        $$

        Let$A = \bmat 1 & 1 & 1\\ 2 & 1 & 0 \emat$ and $b = \bmat 1 & 0.5\emat$. Use projected gradient descent with constant step to minimizes the 3-variable Rosenbrock test function subject to linear constraint $Ax = b$, i.e. solve 

        $$ \min_{x} f(x) \text{ s.t. } Ax = b$$.



