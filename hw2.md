# **CPSC 406: Homework 2 (Due Jan  24, 6pm)**

1. (Beck 3.1) Let $A\in \Re^{m\times n}$, $b\in \Re^n$, $L \in \Re^{p\times n}$ and scalar $\lambda >0$. Consider the regularized least squares problem

	$$\mathop{\text{minimize}}_{x\in \Re^n} \quad f(x) := \|Ax-b\|_2^2 + \lambda \|Lx\|_2^2.$$

	Show that this problem has a unique solution if and only if $\vnull(A) \cap \vnull(L) = \{0\}$.
	Hint: Look up De Morgan's laws.

2. **Multiobjective problems.** Often, in real world applications, we wish to accomplish multiple goals at once. For example, we may wish to buy the 
biggest house with the least amount of money, or buy the most profitable stocks which also have least risk. These objectives are often competing, and 
it is impossible to optimize one without negatively impacting the other. 

    3. **2-norm regularization.** Consider the 2-norm regularized least squares problem

		$$\minimize{x\in \Re^n} \quad \underbrace{\frac{1}{2}\|Ax-b\|_2^2}_{f_1(x)} + \frac{\gamma}{2}\underbrace{\|x\|_2^2}_{f_2(x)}$$

		Show that at optimality, 

		$$\|x\|_2^2 = \sum_{i=1}^n \frac{1}{(d_i+\gamma)^2} g_i^2$$

		where $A^TA = QDQ^T$ the eigenvalue decomposition and $g = Q^TA^Tb$. Roughly sketch  what the Pareto-Frontier looks like here, paying 
        attention to the limiting behavior ($\gamma\to 0$ and $\gamma\to +\infty$).
    
    4. **Sparsity.** As an example, let us consider the problem of sparse recovery, where we wish to find the sparsest solution $x$ such that $Ax \approx b$. 
        Here, we motivate sparsity by minimizing the 1-norm of $x$, e.g. 

		$$f_1(x) = \frac{1}{2}\|Ax-b\|_2^2, \qquad f_2(x) = \|x\|_1$$

		and the goal is to make both $f_1(x)$ and $f_2(x)$ small.
		
		Download data $A\in \Re^{m\times n}$([`jld`](hw2_p2_sparse_A.jld)) and $b\in \Re^m$([`jld`](hw2_p2_sparse_b.jld)). Using 
		[Convex.jl](https://www.juliaopt.org/Convex.jl/stable/) pacakage or [CVX](http://cvxr.com/cvx/) solve the following problem for $\gamma = 1$. 

		$$\minimize{x\in \Re^n} \; \underbrace{\frac{1}{2}\|Ax-b\|_2^2}_{f_1(x)} + \gamma \underbrace{\|x\|_1}_{f_2(x)}$$	

		Report the accuracy ($f_1(x^*)$ value) and sparsity metric ($f_2(x^*)$ value).

	5. To show the effect of the ``sparsity promoter" term ($f_2(x)$), repeat the above exercise for $\gamma = 0.01$ and $\gamma = 10$. Plot both solutions
		 on top of the original signal [$\vx_0$](hw2_p2_sparse_signal.jld). Which solution gives better signal recovery?

	6. Repeat the above exercise for 100 different values of $\gamma$, generated from  `exp10.(range(-3, stop=3, length=100))`. Plot the cost $f_1(x)$ on the $x$-axis and 
		$f_2(x)$ on the $y$-axis. 
		
		This is the \emph{Pareto frontier}. For any cost value pair to the  upper right of this curve, at least one cost can be made smaller at no expense to 
		the other. For any cost value pair to the lower left of the curve, the cost values are unattainable. The pareto frontier represents the 
		``best case scenario" set of points. 
				
				
