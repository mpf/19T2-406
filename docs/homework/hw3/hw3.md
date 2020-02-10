# **CPSC 406: Homework 3 (Due Feb 7, 6pm)**

1. (Exercises from Beck Ch 2) 

    7. (Beck 2.17) Consider $f(x_1,x_2) =  2x_2^3-6x_2^2+3x_1^2x_2$.

        8. Find all the stationary points, e.g. all $\vx = (x_1,x_2)$ where $\nabla f(\vx) = 0$. 

        9. For all the stationary points and evaluate the Hessian. For each point, is the Hessian positive definite, positive semidefintie, negative definite, negative semidefinite, or none of these? What can you conclude about these stationary points? Are they local minimum? global minimum? local maximum? global maximum? saddle points? Are they strict or nonstrict?

        10. For each stationary point, plot a surface  plots for this 2-D function that zooms in on the stationary point. Visually, are they local minima, local maxima, or saddle points?

        11.  From the picture, for each point, are they local / global minima/ maxima? Neither?
    
    12. (Beck 2.19) Let $f(\vx) = \frac{1}{2} \vx\trans\mA\vx + \vb\trans\vx + \vc$, where $\mA \in \R^{n\times n}$ is PSD ($\mA\succeq 0$), $\vb\in \R^n$, and $\vc\in \R$. Show that $f$ is bounded below over $\R^n$ if and only if $\vb\in \range(\mA) = \{\mA\vy : \vy\in \R^n\}$. Note: you must argue both directions!

13. Consider $\mA\in \R^{m\times n}$ and $\mB\in \R^{m\times n}$. Show that 
    $$ \tr(\mA\trans\mB) = \sum_{i,j} A_{ij}B_{ij}.$$ 
    Compute the number of flops and storage required to calculate the left hand side ($\tr(\mA'*\mB)$) and right hand side ($\sum_{i,j} A_{ij}B_{ij}$) . (Use  $O(f(n,m))$ notation.) Which of the two is the "superior" formulation?

14. (Structured matrices.) Consider a  matrix $\mA\in \R^{n\times n}$.

    15. Suppose $\mA$ is diagonal, e.g. $A_{ij} = 0$ whenever $i\neq j$. Prove that $\mA \succeq 0$ if and only if $A_{ii} \geq 0$ for all $i$, and $\mA\succ 0$ if and only if $A_{ii} > 0$ for all $i$.

    16. Suppose that $\mA$ is block diagonal, e.g. 

        $$ \mA = \bmat \mA^{(1)} & 0 &  \cdots & 0 \\ 0 & \mA^{(2)} & \cdots & 0 \\ \vdots   & \vdots   & \ddots & \vdots \\0 & 0 & \cdots  &\mA^{(l)}  \\ \emat.$$

        Prove that $\mA\succeq 0$ if and only if each block $\mA^{(k)} \succeq 0$ for all $k$, and $\mA\succ 0$ if and only if $\mA^{(k)} \succ 0$ for all $k$.

18. We will show that if a twice continuously differentiable $f:\R^n\rightarrow \R$ has $L$-Lipschitz continous gradient and a minimizer of $\min_{\vx \in \R^n} f(\vx)$ exists, then the graident method with constant step size converges if step size $\bar{\alpha} \in (0,\frac{2}{L})$. In the following subquestion, assume that $f$ has an $L$-Lipschitz continous gradient and is twice continuously differentiable.

    19. Fix $\vx \in \R^n$. Show that $\|\nabla^2 f(\vx)\vv \|_2 \leq L\|\vv\|_2$ for all $\vv$. (Hint: Let $c:\R^n\rightarrow\R^n$ be continuously differentiable. Then the directional derivative of $c$ at $\vx$ in the direction of $\vv$ is 

        $$ \mJ\vv = \lim_{t ↘ 0} \frac{c(\vx + t\vv) - c(\vx)}{t},$$

        where $\mJ$ is the Jacobian of $c$ at $\vx$. Apply this to $c = \nabla f$ and take 2-norm of both sides.)

    19. Show that for all $\vx$, the eigenvalues of $\nabla^2 f(\vx)$ are bounded from above by $L$ , i.e. for all $\vx$, we have $\nabla^2 f(\vx) \preceq L \mI$. 

    20. Building on part b. and using multivariate Taylor's remainder theorem (Beck Thm 1.24), show that

        $$f(\vv) \leq f(\vw) + \nabla f(\vw)\trans (\vv-\vw) + \frac{L}{2}\|\vv-\vw\|_2^2$$

        for all $\vv$ and $\vw$. This is known as the descent lemma.

    21. Consider gradient descent with constant step size $\alpha$, i.e.

        $$\vx_{k+1} = \vx_k - \alpha \nabla f(\vx_k).$$

        In the descent lemma, substitute $\vv = \vx_{k+1}$ and $\vw = \vx_{k}$ and show that $f(\vx_{k+1}) < f(\vx_k)$ if $\alpha \in (0,\frac{2}{L})$ and $\vx_k$ is not a stationary point.

