# **Homework 4 solution**





1. Take any $x\in \setS$ and $y\in \setS$. Then take any convex combination 
    
    \begin{equation}
    z = \theta x + (1-\theta) y,\qquad 0\leq \theta \leq 1.
    \end{equation}
    
    Then for all $\setS_i$,

    \begin{equation}
    x,y\in \setS \Rightarrow x,y\in \setS_i \overset{\text{convexity of $\setS_i$}}{\Rightarrow} z\in \setS_i.
    \end{equation}
    
    Therefore $z\in \setS$, and thus $\setS$ is a convex set.

2. Again, we can just use the definition of convexity. If 
    
    \begin{equation}
    \|x_1\|_2 \leq t_1,\qquad \|x_2\|_2\leq t_2
    \end{equation}
    
    then picking any $\theta$ where $0 < \theta < 1$ and defining
    
    \begin{equation}
    x = \theta x_1 + (1-\theta) x_2,\qquad t = \theta t_1 + (1-\theta) t_2
    \end{equation}
    
    then
    
    \begin{align*}
    \|x\|_2 =& \|\theta x_1 + (1-\theta) x_2\|_2 \\
    \overset{(a)}{\leq} & \|\theta x_1\|_2 + \|(1-\theta) x_2\|_2 \\
    \overset{(b)}{=}& \theta \|x_1\|_2 + (1-\theta) \|x_2\|_2\\
    \leq& \theta t_1 + (1-\theta) t_2\\
    =&t
    \end{align*}
    
    where (a) is by triangle inequality and (b) is by the positive homogeniety of norms. ($\|\alpha x\| = |\alpha|\|x\|$ for any norm, for any scalar $\alpha$.) 
    Therefore for any $(x_1,t_1)\in \setS$ and $(x_2,t_2)\in \setS$, any convex combination $(x,t)\in \setS$.

3. 

    1. Define 

        \begin{equation}
        u^* = \argmin_{u\geq 0}\;  \|u-(x^*-\gamma \nabla f(x^*))\|_2^2.
        \end{equation}

        We want to show that 
        
        \begin{equation}
        \text{WTS: } x^* = u^* \Rightarrow \nabla f(x^*) \geq 0.
        \end{equation}
        
        First, note that the projection on the nonnegative cone decomposes per element. That is, 
        
        \begin{align*}
        & u^* = \argmin_{u\geq 0} \|u-(x^*-\gamma \nabla f(x^*))\|_2^2\\
        \iff & u_i^* = \argmin_{u_i\geq 0} \|u_i-(x_i^*-\gamma (\nabla f(x^*))_i)\|_2^2,\; \forall i.
        \end{align*} 
        
        Therefore we can reduce our W.T.S to 
        
        \begin{equation}
            \text{WTS: } x_i^* = u_i^* \Rightarrow (\nabla f(x^*))_i \geq 0.
        \end{equation}
        
        But, elementwise, we can actually find the projection of $u_i$ explicitly. In general, 
        
        \begin{equation}
        \argmin_{v\geq 0} \; (v-y)^2 = \begin{cases} y & \text{if } y \geq 0 \\ 0 & \text{else} \end{cases} = \max\{y,0\}.
        \end{equation}
        
        So, we want to show that 
        
        \begin{equation}
        \text{WTS: } x_i^* = \max\{x_i^* - \gamma \nabla f(x^*)_i, 0\}  \Rightarrow (\nabla f(x^*))_i \geq 0.
        \end{equation}

        Now assume $\nabla f(x^*)_i < 0$. Then  
        
        \begin{equation}
        u^* = \max\{\underbrace{x_i^*}_{\geq 0} \underbrace{-\gamma \nabla f(x_i^*)}_{> 0},0\} = x_i^* - \gamma \nabla f(x^*_i) \neq x_i^*.
        \end{equation}
        
        Therefore  we have proved the contrapositive
        
        \begin{equation}
        (\nabla f(x^*)_i < 0 \Rightarrow x_i^* \neq u_i^*) \iff (x_i^* = u_i^* \Rightarrow \nabla f(x^*)_i \geq 0).
        \end{equation}
    
    2. $\Rightarrow$: Take $y = x^* - \alpha \nabla f(x^*)$. Then
        
        \begin{align*}
        \|y - u\|_2^2  =& \|x^*-u\|_2^2- 2(x^*-u)^T (\nabla f(x^*)) + \|\nabla f(x^*)\|_2^2\\ \geq& \|x^*-u\|_2^2 + \|\nabla f(x^*)\|_2^2 
        \end{align*}

        which is minimized only if $u = x^*$.

        $\Leftarrow$: Take again $y = x^* - \alpha \nabla f(x^*)$.  Recall that all convex functions $f$ over a convex set $\mathcal C$ have the  property:
        
        \begin{equation}
        f(u) \leq f(v) - \nabla f(u)^T(v-u),\; \forall u,v\in \mathcal C.
        \end{equation}

        Then
        
        \begin{equation}
        u^* = \argmin_{u\in \mathcal C}f(u) \iff \nabla f(u^*)^T(v-u^*)\geq 0,\;\forall v\in\mathcal C
        \end{equation}

        Let  $g(u) = \frac{1}{2}\|u-y\|_2^2$ and consider
        
        \begin{align*}
        \nabla g(x^*)^T(v-x^*) =& (x^*-y)^T(v-x^*) = (x^*-(x^*-\alpha\nabla f(x^*)))^T(v-x^*)\\ =& \alpha\nabla f(x^*)^T(v-x^*)\\ \geq & 0,\;\forall v\in\mathcal C
        \end{align*}

4. 

    1. Let $x^* = \text{proj}_\setC(z)$ be the minimizer of 

        \begin{equation}
        \argmin_{x \in \setC} \frac{1}{2}\|x - z\|_2^2.
        \end{equation}

        By optimality condition, $-(x^* - z) \in \setN_{\setS}(x^*)$. We will first show that $x^* - z \in \range(A^T)$ by showing the sets $\range(A^T)$ and $\setN_\setS(x)$ are equal. Consider the shifted set $\setS' = \{u-x : u\in \setS\}$. Then 

	    \begin{align*}
        \setN_{\setS}(x) &= \{g \in \R^n : g^T(u - x) \leq 0, \forall u\in \setS\}\\
        &= \{g \in \R^n : g^Tu \leq 0, \forall u\in \setS'\}\\
        &= \{g\in \R^n : g^Tu \leq 0,\; \forall u\in \vnull(A)\}
        \end{align*}
	
	    Note that if $u\in \vnull(A)$ and $g^Tu < 0$, then $-u\in \vnull(A)$ and $g^T(-u) > 0$. Therefore, it must be that 
	
        \begin{equation}
        \setN_\setS(x) = \{g \in \R^n : g^Tu = 0,\; \forall u\in \vnull(A)\} =\range(A^T)
        \end{equation}
        
        Therefore, there exist a $y$ such that $A^Ty = x^* - z$. Also, by feasibility, we have that $Ax^* = b$. Putting these two equation together, we get $x^* = z + A^T(AA^T)^{-1}(b-Az)$.

    2.  The minimizer is $x = (0.027,0.446,0.527)$.  

        ```julia
        # define the n=3 Rosenbrock function
        f3(x)= 100.0 * (x[2] - x[1]^2)^2 + (1-x[1])^2 + 100.0 * (x[3]-x[2]^2)^2+(1-x[2])^2
        # compute the gradient
        g(x) = ForwardDiff.gradient(f3, x)
        #setup the problem
        a1 = ones(1,3) ; b1 = 1
        a2 = [2 1 0]; b2 = 0.5
        A = vcat(a1,a2); b = vcat(b1,b2);
        #compute projection
        proj(z) = z + A'* ( (A*A') \ (-A*z+b))
        #projected gradient step
        xk = [];
        xk = push!(xk,zeros(3));
        step = 1e-4;
        itt_max = 500;
        for i in 1:itt_max
            xkp = xk[i] - step * g(xk[i]);
            xkp = proj(xkp)
            if rem(i,100) == 0
                @printf("iteration = %d, successive error = %f\n",i, norm(xk[i] - xkp))
            end
            push!(xk,xkp)
        end
        #print solution
        @printf("\nThe minimizer is x = (%.3f,%.3f,%.3f)\n", xk[itt_max][1], xk[itt_max][2], xk[itt_max][3])
        ```


5. 

    1. The function $f(x) = - \sum_{i=1}^n x_i \log x_i$ is concave in the simplex set because Hessian is a diagonal matrix given by

        \begin{equation}
        \nabla^2f(x)_{i,j} = \left\{\begin{array}{ll}-\frac{1}{x_i}&\text{ if } i = j\\ 0 &\text{ otherwise,}\end{array}\right.
        \end{equation}

        is negative semi-definite on the simplex.

    2. We first calculate the gradient of the function $f(x) = \log\left(\sum_{i=1}^m e^{a_i^Tx}\right)$. Let $A = [a_1,\dots, a_m]^T$. The gradient is (hint: using chain rule) $\nabla f(x) = \frac{1}{e^Ty}A^Ty$, where $y = e^{a_i^Tx}$. Next, we calculate the Hessian of the function $f$. Note that the $k$th element of the gradient is $\frac{∂f}{∂x_k} = \sum_{i} \frac{A_{ik}y_i}{e^Ty}$. So, by chain rule we have

        \begin{align*}
        \frac{\partial^2 f}{\partial x_k \partial x_j} &=\sum_{i=1}^m \underbrace{\frac{A_{ik}e^Ty - A^Ty }{(e^Ty)^2}}_{\frac{\partial }{\partial y_i} \frac{\partial f}{\partial x_k}}    \cdot \underbrace{ A_{ik}y_i}_{\frac{\partial y_i}{\partial x_j}}\\
        &= \sum_{i=1}^m   \left(\frac{A_{ik} }{e^Ty} - \frac{ A^Ty }{(e^Ty)^2}\right)  \cdot  A_{ij}y_i
        \end{align*}


        The Hessian can be compactly expressed as 
        
        \begin{equation}
        \nabla^2 f(x) = \frac{1}{e^Ty} A^T\text{diag}(y) A - \frac{1}{(e^Ty)^2} A^Tyy^TA.
        \end{equation}

        So is $f(x)$ convex? Pick any $u\in \R^n$ and consider
	
        \begin{equation}
        u^T\nabla^2 f(x) u = \frac{1}{e^Ty} u^TA^T\text{diag}(y) Au - \frac{1}{(e^Ty)^2} (u^TA^Ty)^2
        \end{equation}
        
        Let
        
        \begin{equation}
        \theta_i = \frac{y_i}{e^Ty}, \quad v_i = \frac{1}{\sqrt{\theta_i}} a_i^Tu
        \end{equation}
        
        
        Note that $\theta$ is in the simplex. Then
        
        \begin{equation}
        u^T\nabla^2 f(x) u =\sum_{i=1}^m  v_i^2  - \sum_{i=1}^m v_i^2 \theta_i \geq 0
        \end{equation}
        
        Therefore Log-Sum-Exp is convex.	



