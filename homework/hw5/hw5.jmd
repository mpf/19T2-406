# **CPSC 406: Homework 5 (Due March  25, 6pm)**

1. **Convex function**

    1. Let $f_1$ and $f_2$ be two convex functions. Prove that the function $f(\vx) = \max\{f_1(\vx),f_2(\vx)\}$ is also convex.
    
    2. Let $f(w,x) = \sqrt{4+(w-x)^2} - (w+x)$. Prove that the function $f$ is jointly convex in $w$ and $x$.

    3. Let $f(w,x) = \gamma(w,x) \left(\sqrt{4+(w-x)^2} - (w+x)\right)$, where

        $$\gamma(w,x) = \left\{\begin{array}{ll}1 & \text{if }\sqrt{4+(w-x)^2} - (w+x)\leq 0, \\
        2 & \text{otherwise.}\end{array}\right.$$

        Prove that $f$ is jointly convex in $w$ and $x$. Hint: plot $f(w,x)$.

2. **Support function**. Let $C$ be a closed and bounded set that contain $0$. The support function of a set $C ⊆ \R^n$ is defined as

    $$\sigma_C (\vy) = \max\{\vy\trans \vx | \vx ∈ C\}.$$

    1. All of the $p$-norms can be viewed as a special case of the support function defined above. For example, $\|\vy\|_2 = \sigma_C(\vy)$ if the set $C$ is the normalized $2$-norm ball, i.e. $C = \{\vx\in\R^n| \|\vx\|_2 \leq 1\}$. For which set $C$ is the support function equal to $1$-norm? For which set $C$ is the support function equal to $∞$-norm? 
    
    2. Note that all norms are convex function because they satisfy triangle inequality. Show that $\sigma_C$ is convex by showing triangle inequality for the support function.
    
3. **Jensen's Inequality** Let $f:C→\R$ be a convex function. Show that for all $x_{i} \in C$, $i = 1,\dots, k$, we have

    $$ f(\sum_{i = 1}^k \theta_i x_i) \leq \sum_{i=1}^k \theta_i f(x_i),$$

    where $\sum_{i=1}^k \theta_i = 1$ and $\theta_i\geq 0$.