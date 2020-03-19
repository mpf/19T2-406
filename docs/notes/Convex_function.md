# **Convex functions**

A function $f:\mathcal{C} → \R$ is  convex if $\mathcal{C} is convex and the function satisfies

$$f(\theta \vx + (1-\theta)\vy) \leq \theta f(\vx) + (1-\theta) f(\vy),\text{ for all } \vx,\vy \in\mathcal{C} \text{ and } \theta\in[0,1].$$

Intuitively, the function is convex if the line segment between $f(\vx)$ and $f(\vy)$, for any $\vx$ an $\vy$, lies above or on the graph of the function. If the line segment lies strictly above the graph of the function, then we say the function is strictly convex, i.e. $f:\mathcal{C} → \R$ is  strictly convex if $\mathcal{C} is convex and the function satisfies

$$f(\theta \vx + (1-\theta)\vy) < \theta f(\vx) + (1-\theta) f(\vy),\text{ for all } \vx,\vy \in\mathcal{C} \text{ and } \theta\in [0,1].$$

These definitions can be used to describe (strictly) concave functions as well. We say a function $f$ is (strictly) concave if $-f$ is (strictly) convex.  Below are some examples of convex and concave functions:

1. Convex functions

    1. Affine: $\va\trans\vx + \beta$ for any $\va\in\R^n$, $\beta \in \R$.
    
    2. Exponential: $e^{\alpha x}$ for any $\alpha \in \R$.

    3. Powers: $x^\alpha$ on $\R_{ ++ }$ for all $\alpha \geq 1$ or $\alpha \leq 0$.

    4. Absolute value: $|x|^p$ for al $p\geq 1$.

    5. Negative entropy: $x\log x$ on $\R_{ ++ }$.

2. Concave functions

    1. Affine: (see above)

    2. Powers: $x^\alpha$ on $\R_{++}$ for all $0\leq x\leq 1$.

    3. Logarithm: $\log x$ on $\R_{ ++ }$.

In the following sections, unless otherwise stated, we assume the function is convex. However, the properties of these convex function can be adapted to concave functions as well.

## **Restriction to lines**

A useful property of convex function is that every restriction of the function on a line is also convex. For a fixed $\vx\in\R^n$ and $\vd \in \R^n$, the restriction of $f$ along $\vd$ is $f(\vx +\alpha \vd). Here, $\alpha \in\R$ sweeps the graph of the function starting at $\vx$ in the direction of $\vd$. More formally, the function $f:\mathcal{C} \rightarrow \R$, where $\mathcal{C}\subseteq \R^n$ is a convex set, is convex if and only if

$$ \psi(\alpha) = f(\vx+\alpha \vd)$$

is convex for all $\vx \in \mathcal{C}$ and $\vd \in \R^n$.

## **Operations that preserve convexity**

1. Non-negative multiple: The function $\alpha f$ is convex if $f$ is convex and $\alpha \geq 0$.

2. Sum (including infinite sums): The function $f_1 + f_2$ is convex if $f_1$ and $f_2$ are convex functions.

3. Composition with affine function: Fix $\mA \in\R^{m\times n}$ and $\vb \in \R^m$. The function $f(\mA\vx+\vb)$ is convex if $f$ is convex. 

**_Example_**

1. Log barrier: The function $f(x) = -\sum_{i = 1}^m \log(\va_i\trans\vx - b_i)$ is convex over the set $\cap _{i = 1}^m\{\vx\in\R^n | \va_i\trans\vx>b_i\}$

2. Norm of affine function: The function $f(x) = \|\mA\vx-\vb\|$ is convex.

3. The function $f(x_1, x_2, x_3) = e^{x_1 - x_2 + x_3} +e^{2x_2} + x_1$ is convex.





