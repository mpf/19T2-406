# **QR factorization**

## **Orthogonal and orthonormal vectors**

Let $\vx, \vy\in\R^n$ be any two vectors. By cosine identity, we have

$$ 
\vx\trans\vy = \|\vx\|_2\|\vy\|_2\cos(\theta)$
$$ 

where, $\theta$ is the angle between $\vx$ and $\vy$. So, $\vy$ and $\vy$ are orthogonal ($\theta = 0$), 
if $\vx\trans\vy = 0$. Furthermore, we say $\vx$ and $\vy$ are orthonomal of $\vx$ and $\vy$ have unit 
norm and are orthogonal, i.e.

$$
\vx\trans\vy = 0, \quad \vx\trans\vx =1 , \quad \vy\trans\vy = 1.
$$  

## **Orthogonal matrices**

A matrix $\mQ$ is orthognal if it is square and its columns are all pairwise orthogonal. For an orthogonal 
matrix $\mQ = \bmat\vq_1 &\dots&\vq_n\emat$, we have

$$
\mQ\trans\mQ = \mQ\mQ\trans = \mI.
$$

Since, a matrix $\mB$ is the inverse of a matrix $\mA$ if $\mB\mA =\mA\mB = \mI$, the inverse of an 
orthognal matrix is its transpose, i.e.

$$
\mQ^{-1} = \mQ\trans.
$$

Orthognal matrices has many nice properties. One such property is that inner products are invariant under 
orthgonal transfromations. So, for any vectors $\vx,\ \vy$, we have

$$
(\mQ\vx)\trans(\mQ\vy) = \vx\trans\mQ\trans\mQ\vy = \vx\trans\vy.
$$

This also implies that 2-norm is invariant to orthogonal transformations as $\|\mQ\vx\|_2 = \|\vx\|_2$.
Another property of othogonal matrices is that their determinant is either $1$ or $-1$. This can be observed
from the fact that for a matrix $\mA$ and $\mB$, we have $\det(\mA\mB) = \det(\mA)\det(\mB)$ and $\det(\mA)=
\det(\mA\trans)$. So, from $\mQ\trans\mQ = \mI$, we get

$$
\det(\mQ\trans\mQ) = \det(\mI) \iff \det(\mQ)^2 = 1 \iff \det(\mQ) = ±1.
$$

## **QR factorization**




