# **Convex functions**

A function $f:\mathcal{C} → \R$ is  convex if $\mathcal{C} is convex and the function satisfies

$$f(\theta \vx + (1-\theta)\vy) \leq \theta f(\vx) + (1-\theta) f(\vy),\text{ for all } \vx,\vy \in\mathcal{C} \text{ and } \theta\in[0,1].$$

Intuitively, the function is convex if the line segment between $f(\vx)$ and $f(\vy)$, for any $\vx$ an $\vy$, lies above or on the graph of the function. If the line segment lies strictly above the graph of the function, then we say the function is strictly convex, i.e. $f:\mathcal{C} → \R$ is  strictly convex if $\mathcal{C}$ is convex and the function satisfies

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

A useful property of convex function is that every restriction of the function on a line is also convex. For a fixed $\vx\in\R^n$ and $\vd \in \R^n$, the restriction of $f$ along $\vd$ is $f(\vx +\alpha \vd)$. Here, $\alpha \in\R$ sweeps the graph of the function starting at $\vx$ in the direction of $\vd$. More formally, the function $f:\mathcal{C} \rightarrow \R$, where $\mathcal{C}\subseteq \R^n$ is a convex set, is convex if and only if

$$ \psi(\alpha) = f(\vx+\alpha \vd)$$

is convex for all $\vx \in \mathcal{C}$ and $\vd \in \R^n$.

## **Operations that preserve convexity**

1. **Non-negative multiple**: The function $\alpha f$ is convex if $f$ is convex and $\alpha \geq 0$.

2. **Sum (including infinite sums)**: The function $f_1 + f_2$ is convex if $f_1$ and $f_2$ are convex functions.

3. **Composition with affine function**: Fix $\mA \in\R^{m\times n}$ and $\vb \in \R^m$. The function $f(\mA\vx+\vb)$ is convex if $f$ is convex. 

**_Example_**

1. Log barrier: The function $f(x) = -\sum_{i = 1}^m \log(\va_i\trans\vx - b_i)$ is convex over the set $\cap _{i = 1}^m\{\vx\in\R^n | \va_i\trans\vx>b_i\}$

2. Norm of affine function: The function $f(x) = \|\mA\vx-\vb\|$ is convex.

3. The function $f(x_1, x_2, x_3) = e^{x_1 - x_2 + x_3} +e^{2x_2} + x_1$ is convex.

## **Characterizations of convex function**

One intuitive property of the convex function is that every point on the graph of the function is supported by a hyperplane. This property is summarized by the following first order characterization of convex functions.

-----
**_Lemma_** Let $f:\mathcal{C}\rightarrow \R$ be continuously differentiable over a convex set $\mathcal{C} \subseteq \R^n$. Then $f$ is convex if and only if 

$$ f(\vx) + \nabla f(\vx)\trans(\vy - \vx) \leq f(\vy) \text{ for all } \vx, \vy \in \mathcal{C}.$$

**_Proof Idea_** By convexity of $f$, we have

$$ f(\theta \vy +(1-\theta) \vx) \leq \theta f(\vy)+(1-\theta)f(\vx)$$

for all $\vx,\vy\in\mathcal{C}$ and $\theta \in [0,1]$. This implies that

$$ \frac{f(\theta \vy +(1-\theta) \vx) - f(x)}{\theta} \leq f(\vy)-f(\vx).$$

Taking $\lim \theta ↘ 0$, we get $f'(\vx; \vy-\vx) \leq f(\vy) - f(\vx)$. Since, $f'(\vx; \vy-\vx) = \nabla f(\vx)\trans (\vy-\vx)$, we have $f(\vx) + \nabla f(\vx)\trans(\vy - \vx) \leq f(\vy)$. This completes part of the proof.

-----

Now, we state the second order characterization of convex functions. The second order characterization relates the Hessian of the function with convexity.

-----
**_Lemma_** Let $f:\mathcal{C}\rightarrow \R$ be twice continuously differentiable over a convex set $\mathcal{C} \subseteq \R^n$. Then $f$ is convex if and only if $\nabla^2f(\vx) ⪰ 0$ for all $\vx \in \mathcal{C}$.

The level set of function $f:\mathcal{C}→\R$ is the set 

$$ [f\leq \alpha] := \{\vx \in \mathcal{C}\ |\ f(\vx) \leq \alpha\}.$$

----- 
**_Lemma_** If $f$ is convex then all of its level sets are convex.

**_Proof_** Take $\vx,\vy \in [f \leq \alpha]$. Then $f(\vx) \leq \alpha$ and $f(\vy) \leq \alpha$. Since $f$ is convex, we have that for all $\theta \in [0,1]$

\begin{align}
f(\theta \vx + (1-\theta)\vy) &\leq \theta f(\vx) + (1-\theta)f(\vy)\\ &\leq \theta \alpha + (1-\theta) \alpha\\ &= \alpha.\end{align}

Thus, $\theta \vx +(1-\theta)\vy \in [f\leq \alpha]$. QED

-----

**_Corollary_** The set of minimizers of 
\begin{equation}\label{convex opt}
\min_{\vx} \ f(\vx) \text{ subject to } \vx \in \mathcal{C}
\end{equation}
is convex.


## **Optimality conditions**

Convex function enjoys simple global optimality conditions. The main reason for this is any local minimizer of a convex function is also a global minimizer. In order to formalize this property of convex optimization, we first define local and global minimizers. We say $\vx^*$ is a local minimizer of \eqref{convex opt} if $f(\vx^*)\leq f(\vx)$ for all $\vx \in \mathcal{C}\cap \mathcal{B}_{ϵ}(\vx^*)$. Here, $\mathcal{B}_{ϵ}(\vx^*)$ is the set $\{\vx\in \R^n | \|\vx-\vx^*\| \leq ϵ\}$. While local minimizer is a statement for points around a point, global minimizer is a statement for all points in the set $\mathcal{C}$. We say $\vx^*$ is a global minimizer of \eqref{convex opt} if $f(\vx^*)\leq f(\vx)$ for all $\vx \in \mathcal{C}$.

-----
**_lemma_** Consider the optimization program \eqref{convex opt}. If $\vx^*$ is a local minimizer of \eqref{convex opt}, then it is also a global minimizer of \eqref{convex opt}.

**_Proof_** Suppose $\bar{\vx}$ is a local minimizer, but not a global minimizer. Then there exists $\vy \in \mathcal{C}$ such that $f(\vy) \leq f(\bar{\vx})$. Also, for any $\theta \in [0,1]$, we have

\begin{align*}f(\theta \bar{\vx} + (1-\theta)\vy)&\leq \theta f(\bar{\vx}) + (1-\theta)f(\vy)\\&\leq\theta \bar{\vx} + (1-\theta)f(\bar{\vx})\\ &= f(\bar{\vx}).\end{align*}

This is contradiction. QED

-----

Recall that a point $\vx$ is a minimizer of a twice continuously differentiable $f:\R^n →\R$ if and only if $\nabla f(\vx) = 0$ and $\nabla^2 f(\vx) ⪰ 0$. However, if a function is convex, $\nabla f(\vx) = 0$ is a sufficient and necessary condition for $\vx$ to be a minimizer. Since all minimizers of a convex function is a global minimizer, $\nabla f(\vx) = 0$ is sufficient and necessary to assert global optimality of $\vx$. 

-----
**_Lemma (unconstrained)_** Let $f:\R^n → \R$ be a continuously differentiable (strict) convex function. A point $\vx^*$ is a (unique) global minimizer of $f(\vx)$ if and only if $\nabla f(\vx^*) = 0$.

**_Lemma (constrained)_** Let $f:\mathcal{C} → \R$ be a continuously differentiable (strict) convex function. A point $\vx^*$ is a (unique) global minimizer of $f(\vx)$ over the set $\mathcal{C}$ if and only if $\nabla f(\vx^*)\trans (\vz - \vx^*) \geq 0$ for all $\vz \in \mathcal{C}.$

-----












