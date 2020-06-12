# **CPSC 406: Homework 5 (Due date: April 8 at 6 pm)**

1. **Conversion to standard form** In this exercise we will convert the polytope

    \begin{equation}\label{eq:polytope}
    \mathcal{P} = \{\vx : \mA\vx = \vb, \; \mC\vx \leq \vd\}
    \end{equation}

    into standard form

    \begin{equation}\label{eq:standard_form}
    \setP = \{\vz : \tilde{\mA}\vz = \tilde{\vb},  \; \vz \geq 0\}, \text{ with } \tilde{\vb} \geq \vzero.
    \end{equation}

    As always, all inequalities are taken elementwise, i.e. $\vx\geq \vzero \iff x_i \geq 0\; \forall i$.

    **Why is this useful?** Ultimately, most optimization practicioners never write solvers, but instead use and adapt existing solvers. A big hurdle is interfacing with a solver's specialized format. Therefore understanding how to go between different forms is a very important, albeit tedious, practical skill.

    1. Given some constraint $\mA\vx = \vb$, find $\hat \mA$ and $\hat \vb$ such that it is equivalent to $\hat \mA\vx = \hat \vb$ for $\hat \vb \geq \vzero$.

    2. Given some constraint $\mC\vx \leq \vd$, find $\hat \mC$, $\hat \vz$, and $\hat \vd$ where this inequality constraint is equivalent to enforcing
        \begin{equation}
        \hat \mC \hat \vz = \hat \vd,\qquad \hat \vz \geq \vzero.
        \end{equation}

    3. Now put it all together to find $\tilde\mA$, $\tilde \vb$, and $\vz$ in \eqref{eq:standard_form} from \eqref{eq:polytope}.

2. Consider the problem

    \begin{array}{ll}
    \min_{x_1,x_2} & -2x_1 - x_2
    \\\st    & \begin{aligned}[t]
                \phantom{-2}x_1 - x_2 &\le 2
            \\ x_1 + x_2 &\le 6
            \\ x_1,  x_2 &\ge 0.
            \end{aligned}
    \end{array}

    1. Convert the problem into standard form and construct a basic feasible solution at which $\vx=(0,0)$.

    2.  Carry out the steps of the simplex method, starting with the basic feasible solution of part (a). At each iteration, show the basic index set, the reduced costs, and which variables enter and leave the basis.
 
    3. Draw a graphical representation of the problem in terms of the original variables $x_1,x_2$, and indicate the path taken by the simplex algorithm.

3. **Robust optimization** You are the owner of a factory that makes widgets and gadgets. For each widget and gadget, there is a set of feature measurements, e.g. the weight, dimensions, material composition, etc., packed in a vector $\vx$. For maximum profit, you want the combinations of these features to exactly match a set of gold standard specifications, e.g. $\mA\vx = \vb$ where $\mA$ dictates how the features are combined, and $\vb$ is the gold standard. However, realistically, it is too expensive to exactly satisfy $\mA\vx=\vb$, so you have to make some concessions. Instead, you can solve one of three optimization problems:

    \begin{equation}
    \label{e-lasso}
    \minimize_{\vx}\;\|\mA\vx-\vb\|_1 = \sum_k|\va_k^T\vx-b_k|
    \end{equation}

 
    \begin{equation}
    \label{e-max}
    \minimize_{\vx}\;\|\mA\vx-\vb\|_\infty = \max_k|\va_k^T\vx-b_k|
    \end{equation}

    \begin{equation}
    \label{e-ridge}
    \minimize_{\vx}\;\|\mA\vx-\vb\|_2 =\sqrt{ \sum_k|\va_k^T\vx-b_k|^2}
    \end{equation}

    We will use [Convex.jl](https://www.juliaopt.org/Convex.jl/stable/) and [GLPK.jl](https://github.com/JuliaOpt/GLPK.jl) packages to solve the first two problems. We will first convert it to a linear program of the form

    \begin{equation}\label{eq:linprog-form}
        \minimize_{\vz}\ \vc\trans\vz \text{ subject to } \hat{\mA} \vz \leq \hat{\vb},
    \end{equation}
    
    for some $\vc$, $\hat{\mA}$, and $\hat{\vb}$.

    1. Show that \eqref{e-lasso} is a linear program by writing it in form \eqref{eq:linprog-form}.

    2. Show that  \eqref{e-max} is a linear program by writing it in form \eqref{eq:linprog-form}.

    3. Modify the [Julia notebook](HW5_p4.ipynb) and solve all three problems \eqref{e-lasso}, \eqref{e-max}, \eqref{e-ridge} using Convex.jl, GLPK.jl, and/or backsolve. Do so by filling in the blanks in the notebook code.  Histogram the residuals in each case ($\vr = \mA\vx^*-\vb$) and write a few sentences about the residuals corresponding each norm in the notebook.

    4. Widgets are used in the health industry, and if $|\va_k^T\vx-b_k|$ is too large, then patients with illness $k$ will die. You must ensure that not a single patient meets this terrible fate. Which norm do you pick?

    5. Gadgets are used in the retail industry, and $\va_k^T\vx=b_k$ means customers of market segment $k$ is satisfied. Realistically, not all customers can be satisfied, but we want to maximize as many market segments as possible. Which norm do you pick?