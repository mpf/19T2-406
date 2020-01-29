# **CPSC 406: Homework 2 (Due Jan  27, 6pm)**

1. (Beck 3.1) Let $\mA\in \R^{m\times n}$, $\vb\in \R^m$, $\mL \in \R^{p\times n}$ and scalar $\lambda >0$. Consider the regularized least squares problem

	$$\mathop{\text{minimize}}_{\vx\in \R^n} \quad f(\vx) := \|\mA \vx-\vb\|_2^2 + \lambda \|\mL\vx\|_2^2.$$

	Show that this problem has a unique solution if and only if $\vnull(\mA) \cap \vnull(\mL) = \{\vzero\}$.
	Hint: Look up De Morgan's laws.

2. **Multiobjective problems.** Often, in real world applications, we wish to accomplish multiple goals at once. For example, we may wish to buy the 
	biggest house with the least amount of money, or buy the most profitable stocks which also have least risk. These objectives are often competing, and 
	it is impossible to optimize one without negatively impacting the other. 

    3. **2-norm regularization.** Consider the 2-norm regularized least squares problem

		$$\minimize{\vx\in \R^n} \quad \underbrace{\frac{1}{2}\|\mA\vx-\vb\|_2^2}_{f_1(\vx)} + \frac{\gamma}{2}\underbrace{\|\vx\|_2^2}_{f_2(\vx)}$$

		Show that at optimality, 

		$$\|\vx\|_2^2 = \sum_{i=1}^n \frac{1}{(d_i+\gamma)^2} g_i^2$$

		where $\mA\trans\mA = \mQ\mD\mQ\trans$ the eigenvalue decomposition and $\vg = \mQ\trans\mA\trans\vb$. Roughly sketch  what the Pareto-Frontier looks like here, paying 
        attention to the limiting behavior ($\gamma\to 0$ and $\gamma\to +\infty$).
    
    4. **Sparsity.** As an example, let us consider the problem of sparse recovery, where we wish to find the sparsest solution $\vx$ such that $\mA\vx \approx \vb$. 
        Here, we motivate sparsity by minimizing the 1-norm of $\vx$, e.g. 

		$$f_1(\vx) = \frac{1}{2}\|\mA\vx-\vb\|_2^2, \qquad f_2(\vx) = \|\vx\|_1$$

		and the goal is to make both $f_1(\vx)$ and $f_2(\vx)$ small.
		
		Download data $\mA\in \R^{m\times n}$([`jld`](hw2_p2_sparse_A.jld), [`csv`](hw2_p2_sparse_A.csv)) and $\vb\in \R^m$([`jld`](hw2_p2_sparse_b.jld), [`csv`](hw2_p2_sparse_b.csv)).
		 Using [Convex.jl](https://www.juliaopt.org/Convex.jl/stable/) or [CVX](http://cvxr.com/cvx/) package solve the following problem for $\gamma = 1$. 

		$$\minimize{x\in \R^n} \; \underbrace{\frac{1}{2}\|\mA\vx-\vb\|_2^2}_{f_1(\vx)} + \gamma \underbrace{\|\vx\|_1}_{f_2(\vx)}$$	

		Report the accuracy ($f_1(\vx^*)$ value) and sparsity metric ($f_2(\vx^*)$ value).

	5. To show the effect of the "sparsity promoter" term ($f_2(\vx)$), repeat the above exercise for $\gamma = 0.01$ and $\gamma = 10$. Plot both solutions
		 on top of the original signal $\vx_0$([`jld`](hw2_p2_sparse_signal.jld), [`csv`](hw2_p2_sparse_signal.csv)). Which solution gives better signal recovery?

	6. Repeat the above exercise for 100 different values of $\gamma$, generated from  `exp10.(range(-3, stop=3, length=100))`. Plot the cost $f_1(\vx)$ on the 
	$x$-axis and $f_2(\vx)$ on the $y$-axis. This is the *Pareto frontier*. For any cost value pair to the  upper right of this curve, at least one cost can be 
	made smaller at no expense to the other. For any cost value pair to the lower left of the curve, the cost values are unattainable. The Pareto frontier 
	represents the "best case scenario" set of points. 

	7. We now consider another example where we motivate smoothness as well as accuracy. Download data $\mA\in \R^{m\times n}$([`jld`](hw2_p2_smooth_A.jld),[`csv`](hw2_p2_smooth_A.csv)) 
		and $\vb\in \R^m$([`jld`](hw2_p2_smooth_b.jld), [`csv`](hw2_p2_smooth_b.csv)). Again, using [Convex.jl](https://www.juliaopt.org/Convex.jl/stable/) or [CVX](http://cvxr.com/cvx/) package, 
		solve the following problem for $\gamma = 1$. 
		
		$$\minimize{\vx\in \R^n} \; \underbrace{\frac{1}{2}\|\mA\vx-\vb\|_2^2}_{f_1(\vx)} + \gamma \underbrace{\|\mD\vx\|_1}_{f_2(\vx)}$$

		where
		
		$$\mD = \bmat 1 & -1 & 0 &\cdots &0&0 \\ 
		0 &1 & -1  &\cdots &0&0 \\ 
		\vdots & \vdots & \ddots & \ddots & \vdots & \vdots \\
		0 & 0 & 0 & \cdots & 1 & -1   \emat \in \R^{n-1\times n}$$

		Minimize this objective for $\gamma = 0.01$ and $\gamma = 10$. Plot both solutions on top of the original signal $\vx_0$([`jld`](hw2_p2_smooth_signal.jld),
		 [`csv`](hw2_p2_smooth_signal.csv)). Which solutio)n gives better signal recovery?

	8. Repeat the above exercise for 100 different values of $\gamma$, generated from `exp10.(range(-3, stop=3, length=100))`. Plot the Pareto frontier.

9. **Non-linear least squares (adapted from Beck 4.6)** The *source localization problem* consists of minimizing 

	$$\minimize{\vx\in \R^n} \left\{f(\vx) :=  \sum_{i=1}^m \left(\|\vx-\vc_i\|_2^2 - d_i^2\right)^2\right\}$$

	for vectors $\vc_1,...,\vc_m\in \R^n$ and scalars $d_1,...,d_m$. This is of course a nonlinear least squares problem, and thus the Gauss-Newton method can be 
	employed to solve it. We will assume that $n = 2$. 

	10. Compute the gradient of $f(\vx)$ at a given point $\vx$.

	11. Rewrite the problem as 
	
		$$\minimize{\vx\in \R^n} \quad \|r(\vx)\|_2^2$$

		that is, identify $r(\vx) : \R^n \to  \R^m$. Compute also the Jacobian of $r(\vx)$
		
		$$J(\vx) = \bmat \nabla r_1(\vx)\trans  \\ \vdots \\ \nabla r_m(\vx)\trans\emat.$$

	12. Show that as long as all the points $\vc_1,...,\vc_m$ do not reside on the same line in the plane, and at each iterate $\vx^{(k)} \neq \vc_i$ for 
		any $i = 1,...,m$, the method is well-defined, meaning that the linear least squares problem solved at each iteration has a unique solution.

	13. We will now implement some numerical methods on this problem. Download data $\mC\in \R^{2\times 5}$([`jld`](hw2_p3_C.jld), [`csv`](hw2_p3_C.csv)),
		$\vd\in \R^5$([`jld`](hw2_p3_d.jld), [`csv`](hw2_p3_d.csv)), and $\vx \in \R^2$([`jld`](hw2_p3_signal.jld), [`csv`](hw2_p3_signal.csv)). The columns of the $2 \times 5$ matrix $\mC$ are the locations of the five sensors,
		$\vx$ is the "true" location of the source, and $\vd$ is the vector of noisy measurements between the source and the sensors.
		In all cases, initialize with $\vx^{(0)} = (1000, -500)\trans$.

		14. The *gradient descent* method operates via the iteration scheme
		
			$$\vx^{(k+1)} = \vx^{(k)} - \alpha^{(k)} \nabla f(\vx^{(k)})$$

			for a choice of step size $\alpha^{(k)}$. Implement the gradient descent method for a constant step size $\alpha^{(k)} = \bar \alpha$. 
			Try several values until you find the largest value of $\bar \alpha$ such that the method does not diverge. Hint: try several orders of 
			magnitude from $10^{-10}$ to $1$.

		15. Implement gradient descent with backtracking line search. Use parameters $s=1, \alpha=\beta=0.5$. (Refer also to page 51 in 
			[Beck](https://epubs.siam.org/doi/book/10.1137/1.9781611973655).)

		16. Implement damped Gauss-Newton to minimize $f(\vx)$. Use the largest constant step size $\bar \alpha \leq 1$ such that the method does 
			not diverge.

		17. Implement damped-Gauss-Newton with  backtracking line search. Use parameters $s=1, \alpha=\beta=0.5$. (You may need to force the line 
			search to stop after a constant number of iterations.)

	Submit a plot that shows $f(\vx^{(k)})$  tracked for $k = 1,..., 100$ iterations, for all four solvers. Report also the values for $\bar \alpha$ in 
	the constant step size cases. Write 2-3 sentences comparing each approach. Also, describe any deviations of your code to the standard approach. 
	(e.g. any tweaks.)



				
				
