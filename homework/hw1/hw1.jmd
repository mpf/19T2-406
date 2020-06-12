# **CPSC 406: Homework 1 (Due Jan  17, 6pm)**

**Submission Instructions:** The solution will be submitted electronically, using the Canvas system. Solution should be
 typeset using LaTeX (handwritten solution will not be accepted). Using jupyter notebook to type the solution, which supports 
 Julia and Python, is recommended. If you are using jupyter notebook, submit both the ipynb file and its pdf output. 
 If you are not using juypter notebook, the pdf file must contain the codes relavant to the homework. In both cases,
 results of the code should be in the pdf file. See [here](../grades.md#Grades-and-policies) for policy on collaboration and 
 late submissions.

1. **Backsolve** Here, we will explore the computational complexity of solving the system 

    $$
    \mR\vx = \vb, \qquad \mR\in \R^{n\times n}
    $$

    when $\mR$ is either upper triangular ($R_{ij} = 0$ whenever $i > j$) or lower triangular 
    ($R_{ij} = 0$ whenever $i < j$). If $\mR$ were fully dense, then solving this system takes 
    $O(n^3)$ flops. We will show that when $\mR$ is upper or lower triangular, this system takes
    $O(n^2)$ flops. Assume that the diagonal elements $|R_{ii}| > \epsilon$ for $\epsilon$
    suitably large in all cases.

    2. Consider $\mR$ lower triangular, e.g. we solve the system

        $$
        \bmat 
        R_{11} & 0 & \cdots & 0 \\
        R_{21} & R_{22} & \cdots & 0 \\
        \vdots  & \vdots  & \ddots & \vdots  \\
        R_{n,1} & R_{n,2} & \cdots & R_{n,n}\\
        \emat 
        \bmat x_1 \\ x_2 \\ \vdots \\ x_n \emat 
        =
        \bmat b_1 \\ b_2 \\ \vdots \\ b_n \emat. 
        $$

        Show how to find $x_1$. (This should take $O(1)$ flops.)  Given $x_1,...,x_i$,
            show how to find $x_{i+1}$. (This should take $O(i)$ flops.) Putting it all 
            together, we get 

        $$
        O(1) + O(2) + \cdots + O(n-1) + O(n) = O(n^2) \text{ flops.}
        $$

    3. Now consider $\mR$ upper triangular, e.g. we solve the system

        $$
        \bmat 
        R_{11} &  \cdots & R_{1,n-1} &R_{1,n} \\
            0     &  \cdots & R_{2,n-1} &R_{2,n} \\
        \vdots  & \ddots    &  \vdots &\vdots  \\
        0 &  \cdots & 0 &R_{n,n}\\
        \emat 
        \bmat x_1 \\ x_2 \\ \vdots \\ x_n \emat 
        =
        \bmat b_1 \\ b_2 \\ \vdots \\ b_n \emat. 
        $$

        Show how to find $x_n$. (This should take $O(1)$ flops.)  Given $x_{i+1},...,x_n$, 
        show how to find $x_{i}$. (This should take $O(n-i)$ flops.) Putting it all together,
            we get 

        $$
        O(n) + O(n-1) + \cdots + O(2) + O(1) = O(n^2) \text{ flops.}
        $$
    
4. **Linear data fit** Download [data](hw1_p2_data.jld) (Here is the csv format of the same [data](hw1_p2_data.csv) ).
 Fit the best line 

    $$
    f(z) = x_1 + x_2z 
    $$

    to the points $(z_1,y_1),...,(z_n,y_n)$; that is, find the best approximation of the 
        line $f(z)$ to $y$ in the 2-norm sense. Plot the fit, and report $\|\vr\|_2$ the norm of 
        the fit residual.


5. **Polynomial data fit**  Using the same data as above, fit the best order-$d$ 
    polynomial to the points $(z_1,y_1),...,(z_n,y_n)$ , for $d = 2,3,4,5$. That is,
    find $x_1,...,x_{d+1}$ such that 

    $$
    f(z) = x_1 + x_2z + x_3z^2 + \cdots + x_{d+1}z^d
    $$

    best approximates the data in the 2-norm sense (minimizing $\sum_i (f(z_i)-y_i)^2$).
        Plot the fit, and report $\|\vr\|_2$ the norm of the fit residual. About how many degrees 
        is needed for a reasonable fit?



6. **QR factorization** Consider a full rank, underdetermined but consistent 
    linear system $\mA\vx = \vb$, where $\mA$ is $m\times n$ with $m < n$. 

    7. Show how to use the QR factorization to obtain a soution of this system.

    8.  The following script can be used to generate random matrices in Julia, 
        given dimensions $m=10$ and $n=20$:

        ```julia
        m = 10
        n = 20
        A = randn(m,n)
        x = randn(n)
        b = A*x        
        ```
        Write a Julia code for solving for $x$ using the procedure outlined in the previous 
        part of the question. Record the runtime using the Julia calls $\texttt{time()}$. (Make sure you are not running anything else or it will interfere with 
        the timing results.) Record the runtimes for matrices of sizes  $(m,n) = (10,20)$, 
        $(100,200)$, $(100,2000)$,  $(100,20000)$, and $(100,200000)$. Compare the runtimes 
        against finding $x$ using $\vx = \mA\backslash \vb$.

    9. The underdetermined and consistent linear system $\mA\vx=\vb$ has infinitely many solutions. For the case where 
       $\mA \in \R^{m\times n}$ is full rank, show how to use the QR factorization to obtain the least norm solution, i.e. find $\vx_{LN}$ that solves

        $$
        \min_{\vx\in\R^n} \|\vx\|_2^2 \quad \text{ subject to } \quad \mA\vx = \vb
        $$
        
        using QR decomposition.
    