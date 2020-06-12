# **Convex Sets**

In this lecture, we define convex sets and set operations that preserve convexity. We will first look a affine sets, linear sets and subspaces.

## **Affine sets, subspaces**

1. **Affine set:** A line through two distinct points $\vx, \vy \in \R^n$ is the set $\{\vz\ |\ \theta\vx + (1-\theta)\vy = z, \theta \in \R\}$. A set $\setS$ is affine if it contains all lines through any two distinct vectors in the set. That is, for every two vectors $\vx, \vy \in \R^n$ and scalar $\theta \in \R$, the vector $\theta \vx + (1-\theta) \vy$ is also in the set $\setS$.

2. **Subspace:** A set $\mathcal{S} \subset  \R^n$ of vectors in $\R^n$ is called a subspace of the following two properties are satisfied:

    1. (Closed under addition) For every two vectors $\vx$, $\vy \in \setS$, their sum $\vx + \vy$ is also in $\setS$.

    2. (closed under scalar multiplication) For every vector $\vx \in \setS$ and scalar $\theta \in \R$, the scalar multiple $\theta \vx$ is also in $\setS$.

    Examples of subspaces included the range and null space of a matrix. 

## **Convex sets**

The line segment between any two points $\vx$ and $\vy$ is the set $\{z | z = \theta \vx + (1-\theta) \vy,\ \theta \in [0,1]\}$. A set $\setC \subseteq \R^n$ is convex if it contains the line segment between any two distinct points in the set, i.e. $\setC$ is convex if 

$$
\vx ,\vy \in \setC \text{ and } \theta \in [0,1] \Rightarrow \theta \vx + (1-\theta) \vy \in \setC.
$$

<center>
    <img src="../figures/convex_sets.svg" width = "400">
</center>

Another way to define convex sets is via the notion of convex combination. Convex combination of a set of points $\vx_1, \dots, \vx_k \in \R^n$ is the linear combination of those points $\vx = \theta_1\vx_1 + \dots + \theta_k\vx_k$ with the coefficients $\theta_i$ satisfying $\sum_{i=1}^k \theta_i = 1$ and $\theta_i\geq 0$ for all $i$. So, a set $\setC$ is convex if every convex combination of points in the set is in the set. Some examples of convex sets are hyperplanes and half-spaces. Hyperplane is a set of the form $\{\vx\ |\ \va\trans\vx = b\}$, where $\va \neq0$ and $\vb \in \R$. Similarly, half-space is a set of the form $\{\vx\ |\ \va\trans\vx \leq b\}$, where $\va \neq0$ and $\vb \in \R$. Note that hyperplanes are affine and convex, but half-spaces are only convex.

<center>
    <img src="../figures/hyper_halfspace.svg" width = "400">
</center>

If a set is not convex, the simplest way to 'convexify' the set is by taking its convex hull. The convex hull of a set $\setD$ is the set that contains all convex combinations of points in the set $\setD$. Formally, the convex hull of $\setD$ is 

$$ \text{conv}(\setD) := \{z \ | \ z = \theta\vx + (1-\theta)\vy,\ \vx,\vy \in \setD,\ \theta\in[0,1]\}.$$

<center>
    <img src="../figures/convex_hull.svg" width = "400">
</center>

## **Operations that preserve convexity**

1. **Intersections**:  Let $\setC_i \subseteq \R^n$ be a convex set for all $i \in \setI$. Then the intersection $\cap_{i \in \setI} \setC_i$ is itself a convex set. Some examples are:

    1. Convex Polytope: A set $\setP = \{x \in \R^n\ |\ mA\vx \leq\vb\}$ defined by a set of linear inequalities is convex. Let $\va_i$ be the $i$th column of $\mA\trans$. Then, we express $\setP$ as an intersection of half-spaces since

        \begin{align*}\setP &= \{\vx \in \R^n\ |\ \mA\vx \leq\vb\}\\ & = \cap_{i=1}^m \{\vx \ | \ \va_i\trans\vx \leq b_i\}.\end{align*}
        
        Note that half-spaces are convex. Thus, the set $\setP$ is a convex set.

    2. $n$-dimensional simplex: Consider the set $\setC = \{\vx \in \R^n\ |\ \sum_{i=1}^n\vx_i \leq 1,\ \vx_i \geq 0\}$. This set is called an n-dimensional simplex. We can express $\setC$ as

        $$\setP = \{\vx \ | \ \ve\trans\vx\leq 1\}\cap\{\vx \ | -\ \ve_1\trans\vx\leq 0\}\cap\dots\cap\{\vx \ | \ -\ve_n\trans\vx\leq 0\}.$$

        Thus, an $n$-dimensional simplex is the intersection of convex sets and is itself convex.

<center>
    <img src="../figures/polytope_simplex.svg" width = "400">
</center>

2. **Linear Mapping:** Let $\setC \subseteq \R^n$ be a convex set. For any $m$ by $n$ matrix $\mA$, the image of $\setC$ under $\mA$ is convex. That is, the set $\mA(\setC) = \{\mA\vx | \vx \in \setC\}$ is convex.

3. **Addition:** Let $\setC_1,\dots,\setC_m \subseteq \R^n$ be convex sets. For every scalars $\lambda_i$, the addition of the scaled convex sets is itself convex. That is, the set 

$$\lambda_1\setC_1 + \dots + \lambda_m\setC_m = \{\sum_{i=1}^m\lambda_i\vx_i\ |\ \vx_i\in \setC_i, i = 1,dots, m\}$$

is convex.

## **Convex cones**
A set $\setS \subseteq \R^n$ is a cone if every positive scalar multiple of the vector $\vx \in \setS$ is also in the set. That is, 

$$ \setS \text{ is a cone if } \vx\in \setS \Leftrightarrow \alpha \vx \in \setS \text{ for all } \alpha\geq 0$$

<center>
    <img src="../figures/cone.svg" width = "400">
</center>

A convex cone is a cone that is convex. A convex cone satisfies:

$$ \vx, \vy \in \setS \Leftrightarrow \theta_1\vx + \theta_2 \vy \in \setS,\ \text{for all } \theta_1,\theta_2 \geq0.$$


Some examples of convex cones are:

1. Non-negative orthant, $\R^n_+ = \{\vx\ |\ \vx_i\geq 0\ \forall\ i=1,\dots,n\}$.

2. Second-order cone, $\setL_+^n = \{\bmat \vx\\t \emat\in\R^{n+1}\ |\ \|\vx\|_2\leq t,\ \vx \in\R^n,\ t\in \R_+ \}$.

3. Positive semi-definite cone, $\setS_+^n = \{\mX\in\R^{n\times n}\ |\ \vu\trans\mX\vu\geq,\ \forall \vu\in\R^n,\ \mX = \mX\trans\}$.

4. The polytope $\setP =\{\vx\ |\ \mA\vx\leq 0\}$ is a convex cone.




