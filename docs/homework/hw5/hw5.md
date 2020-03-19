# **CPSC 406: Homework 5 (Due March  25, 6pm)**

1. **Convex function**

    1. Let $f_1$ and $f_2$ be two convex functions. Prove that $f(x) = \max\{f_1(x),f_2(x)\}$ is also convex.
    
    2. Let $f(w,x) = \sqrt{4+(w-x)^2} - (w+x)$. Prove that $f$ is a convex function.

    3. Let $f(w,x) = \gamma(w,x) \left(\sqrt{4+(w-x)^2} - (w+x)\right)$ where

        $$\gamma(w,x) = \left\{\begin{array}{ll}1 & \text{if }\sqrt{4+(w-x)^2} - (w+x)\leq 0 \\
        2 & \text{otherwise}\end{array}\right.$$

        Prove that $f$ is convex. Hint: plot $f(w,x)$.

2. **Support function calculus**. The support function of a set $C ⊆ \R^n$ is defined as

    $$\sigma_C (\vy) = \sup\{\vy\trans \vx | \vx ∈ C\}.$$

    1. All of the $\ell_p$-norms can be viewed as a special case of the support function defined above. For example, $\|\vy\|_2 = \sigma_C(\vy)$ if the set $C$ is the normalized $\ell_2$ ball, i.e. $C = \{\vx| \|\vx\|_2 = 1\}$. For which set $C$ is the support function equal to $\ell_1$-norm? For what set $C$ is the support function equal to $\ell_∞$-norm? 
    
    2. Note that all norms are convex function because they satisfy triangle inequality. Let $C$ be a set that contains $0$. Show that $\sigma_C$ is convex by showing triangle inequality for support function.
    
    3. Show that $\sigma_C = \sigma_{\text{conv}(C)}$, where $\text{conv}(C)$ is the convex hull of $C$.

    4. Show that $\sigma_{A+B} = \sigma_{A} + \sigma_{B}$., where $A+B$ is the Minkowski sum of $A$ and $B$.
    
    5. Show that $\sigma_{A∪B} = \max\{\sigma_A, \sigma_B\}$.
    
3. **Jensen's Inequality** Let $f:C→\R$ be a convex function. Show that for all $x_{i} \in C$, $i = 1,\dots, k$, we have

    $$ f(\sum_{i = 1}^k \theta_i x_i) \leq \sum_{i=1}^k \theta_i f(x_i),$$

    where $\sum_{i=1}^k \theta_i = 1$ and $\theta_i\geq 0$.