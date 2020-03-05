# **Quasi-Newton methods**

In this lecture we will study quasi-Newton methods, where we use an approximate Hessian to get the descent direction. Recall that $\vd$ is a descent direction  at $\vx$ if $\vd\trans \nabla f(\vx) < 0$. Some examples of descent directions that we have looked at are:

| Descent method | $\vd$ | $\vd\trans \nabla f(\vx)$ |
| -------------- | ----- | ------------------------- |
| Gradient descent | $-\nabla f(\vx)$ | $-\|\nabla f(\vx)\|_2^2$ |
| Newton | $-\nabla^2 f(\vx)^{-1}\nabla f(\vx)$ | $-\nabla f(\vx) \nabla^2 f(\vx)^{-1} \nabla f(\vx)$ | 
| Diagonal approx. | $- \mD_{\vx}^{-1} \nabla f(\vx)$ | $-\nabla f(\vx) \mD_(\vx)^{-1} \nabla f(\vx)$|

In the above table, the diagonal matrix $\mD$ is an estimate of the Hessian and is given by 

$$
(\mD_{\vx})_{ij} = 
\left\{
\begin{array}{ll}
(\nabla^2 f(\vx))_{ij} & \text{if }  i = j\\
0  &  \text{if } i\neq j
\end{array}
\right. \quad \text{ for } i,j \in \{1,2, \dots, n\}.
$$

For each iteration of the descent scheme, quasi-Newton methods use approximation of Hessian, like the diagonal approximation, to compute the descent direction. Quasi-Newton methods require an initial estimate of the Hessian and procedure to obtain the subsequent estimates of the Hessians at the corresponding iterate. Some well known methods are:

1. Symmetric rank-1 update

2. Bryoden-Fletcher-Goldfarb-Shanno (BFGS) update

## **Symmetric rank-1 update**

Given an estimate of the Hessian at $\vx_{k-1}$, $\tilde{\mH_{k-1}} \in \R^{n\times n}$, the central idea of symmetric rank-1 update is to find $\tilde{\mH_{k}} = \tilde{\mH_{k-1}} + \vv\vv\trans$, where $\vv$ is a vector in $\R^n$. Let $\vs_K = \vx_k - \vx_{k+1}$ and $\vy  = \nabla f(\vx_k) - \nabla f(\vx_{k-1})$. A general rank-1 update satisfies

$$
\underbrace{\mH_{k} = \mH_{k-1} + \vu\vv\trans}_{\text{rank-1 update}} \quad\text{ and } \underbrace{\tilde{\mH}_k \vs_k = \vy_k}_{\text{Secant condition}}.
$$

<center>
    <img src="../figures/bfgs-secant.png" width = "400">
</center>

Note that if $\vx_k$ is c;ose to $\vx_{k-1}$ and $f$ is smooth then $\mH_k$ is a good approximation of the Hessian of $f$ at $\vx_k$ in the direction of $\vs_k$. Plugging the rank-1 update in the secant condition, we get

$$
\begin{align*}
&(\tilde{\mH}_{k-1} + \vu\vv\trans) \vs_k = \vy_k\\
\Rightarrow & \vu = \frac{\vy_k - \tilde{\mH}_{k-1}\vs_k}{\vv\trans\vs_k}.
\end{align*}
$$

Here $\vv_k$ is arbitrary and to satisfy the symmetric update condition, we can set $\vv = \alpha \vu$ for any $\alpha \in \R$. A symmetric rank-1 update to the estimate of the Hessian is 

$$
\vv = \vy_k - \tilde{\mH}_{k-1}\vs_k \quad \text{ and } \tilde{\mH_k} = \tilde{\mH}_{k-1} + \frac{1}{\vv\trans\vs_k} \vv\vv\trans.
$$

However, note that the Newton update requires the inverse of the Hessian to compute the descent direction. Thus, we need estimates of $\mB_k = \tilde{H_k}^{-1}$ for the quasi-Newton method. These are obtained using the same symmetric rank-1 update routine. That is, $\mB_k$ needs to satisfy $\mB_k \vy_k = \vs_k$ and $\mB_k = \mB_{k-1} + \vu\vv\trans$, for some $\vu, \vv \in \R^n$. A symmetric rank-1 update to the estimate of the inverse of the Hessian is 

$$
\vv = \vs_k - {\mB_{k-1}}\vy_k \quad \text{ and } {\mB_k} = {\mB_{k-1}} + \frac{1}{\vv\trans\vy_k} \vv\vv\trans.
$$  

## **BFGS and L-BFGS**

BFGS is a rank-2 update scheme where the updates to the estimate of the Hessian $\tilde{\mH}_{k-1}$ take the form $\tilde{\mH}_{k} = \tilde{\mH}_{k-1} +\vu\vv\trans$, where $\vu, \vv \in \R^{n\times 2}$. The updated estimate of the Hessian $\tilde{\mH}_k$ satisfy

$$
\tilde{\mH}_k \vs_k = \vy_k,\quad \|\tilde{\mH}_{k} - \tilde{\mH}_{k-1}\| \text{ is small, and } \tilde{\mH}_{k} ≻ 0.
$$

The BFGS update to $\tilde{\mH}_{k-1}$ is 

$$
\tilde{\mH}_{k} = \tilde{\mH}_{k-1} + \frac{1}{\vy_k\trans\vs_k}\vy_k\vy_k\trans - \frac{1}{\vs_k\trans\tilde{\mH}_{k-1}\vs_k}\tilde{\mH}_{k-1}\vs_k\vs_k\trans \tilde{\mH}_{k-1},
$$

and the inverse update to $\mB_{k-1} = (\tilde{\mH}_{k-1})^{-1}$ is 

$$
\mB_k = \left(\mI - \frac{1}{\vy_k\trans\vs_k}\vs_k\vy_k\trans\right)\mB_{k-1}\left(\mI - \frac{1}{\vy_k\trans\vs_k}\vy_k\vs_k\trans\right) + \frac{1}{\vy_k\trans\vs_k} \vs_k\vs_k\trans.
$$

Note that the $k$th estimate of the Hessian (or inverse Hessian) in BFGS can be computed using $\{\vs_i\}_{i = 1}^k$ and $\{\vy_i\}_{i=1}^k$ and the initial estimate of the Hessian (or inverse Hessian). When implemented correctly, we do not need to form any matrices and is very fast. The Limited memory BFGS (L-BFGS) improves the storage requirement by only using the last $L$ number of iterates for $\vs_i$ and $\vy_i$ to compute the estimates. This reduces the storage cost to $O(nL)$.

