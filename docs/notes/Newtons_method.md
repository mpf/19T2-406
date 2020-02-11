# **Newton's Method**

In Newton's method, we minimize a quadratic approximation of the function at each iterate. Consider the problem

$$ \minimize_{\vx \in \R^n} f(\vx)$$

where $f:\R^n\rightarrow \R$ is a twice continuously differentiable function. Given an iterate $\vx_k$, define $\vx_{k+1}$ as the minimizer of the quadratic program given by

$$\vx_{k+1} = \argmin_{\vx} \{f_k + \nabla f_k\trans(\vx - \vx_k) - \frac{1}{2}(\vx-\vx_k)\trans\nabla^2f_k(\vx-\vx_k)\}.$$

In the above equation, $f_k := f(\vx_k)$. The minimizer of the quadratic program is well-defined if $\nabla^2 f_k ≻ 0$. In that case,

$$\vx_{k+1} = \vx_{k} - (\nabla^2 f_k)^{-1} \nabla f_k = \vx_k + \vd_k,$$

where $\vd_k$ solves $\nabla^2 f_k d = -\nabla f_k$. The pure Newton's method is given by the following algorithm:

----
**Pure Newton's method**

Given: $\vx_0$, tol > 0
for $k = 0, 1, 2,\dots$

1. $\vg_k ← ∇f(\vx_k)$   (compute gradient)
 
2. $\mH_k ← ∇^2f(\vx_k)$    (compute Hessian)

3. $\vd_k$ solves $\mH_k \vd = -\vg_k$    (compute Newton step)

4. $\vx_{k+1} \leftarrow  \vx_k + \vd_k$

5. STOP if $\|\nabla f(\vx_{k+1})\|_2 \leq$ tol

----

## **Convergence of (pure) Newton's method**

Convergence of (pure) Newton's method requires the Hessian at every iteration to be positive definite, i.e. $\nabla^2f_k \succ  0$ for all iterations k. This positive definiteness of the Hessian ensures that the Newton step is a descent direction since

$$\nabla^2f_k \vd = -\nabla f_k \Rightarrow \vd\trans\nabla^2f_k\vd = -\vd\trans\nabla f_k \Rightarrow \nabla f_k\trans\vd <.0$$

However, positive definiteness is not sufficient for convergence, i.e. the pure Newton method may still diverge even if $\nabla^2 f_k \succ 0$. For example, consider the function $f(x) = \sqrt{1+x^2}$. The derivative of $f$ is $f'(x) = x(1+x^2)^{-\frac{1}{2}}$ and the second-derivative is $f''(x) = (1+x^2)^{-\frac{3}{2}}$. So the Newton iteration is $x_{k+1} = x_k - \frac{f'(x_k)}{f''(x_k)} = -x_k^3.$ Note that 

$$x_{k} \rightarrow \left\{\begin{array}{ll}0 & \text{if } |x_0|<1\\ \pm 1 & \text{if } |x_0|=1\\ \pm\infty & \text{if } |x_0|>1\end{array}\right.$$

----
**_Lemma_** (Convergence of pure Newton's method) Suppose $f:\R^n\rightarrow \R$ is twice continuously differentiable and 

1. there exists an $\epsilon >0$ such that $\nabla^2 f(x)\succeq \epsilon   \mI$ for all $\vx$,

2. there exists some $L>0$ such that $\|\nabla^2 f(\vx) -\nabla^2 f(\vy)\|_2 \leq L \|\vx-\vy\|_2$ for all $\vx$ and $\vy$.  

If the minimizer $\vx_*$ of $f$ is unique, then the pure Newton iterations satisfies

$$\|\vx_{k+1} - \vx_*\|_2 \leq \frac{L}{2\epsilon} \|\vx-\vx_*\|_2^2.$$

In addition, if $\|\vx_0 - \vx_*\|_2 \leq \frac{\epsilon}{L}$, then each iterate $k$ satisfies

$$\|\vx_{k} - \vx_*\|_2 \leq \left(\frac{L}{2\epsilon}\right)\left(\frac{1}{4}\right)^{2^k}.$$

----

## **Rates of convergence**

Rates of convergence measures how fast a sequence $\{\vx_k\}_{k=0,1,2,\dots} converges to its limit (assuming limit exists). Suppose $\vx_k \rightarrow \vx_*$, i.e. $\lim_{k\rightarrow \infty} \|\vx_k -\vx_*\| = 0$. 

1. Linear Convergence: There exists a number $\mu \in (0,1)$ such that $\lim_{k\rightarrow \infty} \frac{\|\vx_{k+1}-\vx_*\|}{\|\vx_k-\vx_*\|} = \mu$. For example, consider the sequence $x_k = 2^{-k}$.

2. Sublinear Convergence: A sequence $\{\vx_k\}_{k=0,1,2,\dots}$ converges sublinearly to $\vx_*$ if $\lim_{k\rightarrow \infty} \frac{\|\vx_{k+1}-\vx_*\|}{\|\vx_k-\vx_*\|} = 1$. For example, consider the sequence $x_k = \frac{1}{k+1}$.

3. Superlinear Convergence: A sequence $\{\vx_k\}_{k=0,1,2,\dots}$ converges superlinearly with order $q$ to $\vx_*$ if there exists a number $M>0$ such that $\lim_{k\rightarrow \infty} \frac{\|\vx_{k+1}-\vx_*\|}{\|\vx_k-\vx_*\|^q} \leq M$. For example, consider the sequence $x_k = \left(\frac{1}{2}\right)^{2^k}$. If $q=2$, we say the convergence of quadratic.
 
