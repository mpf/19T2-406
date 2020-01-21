using JLD
using LinearAlgebra
using Polynomials
using Plots

# D = load("../hw1_p2_data.jld")["data"]
# m = size(D)[1]

# A = [ones(m,1) D[:,1]]
# b = D[:,2]
# xls = A\b 
# p1 = Poly(xls)
# xlim = (-4,3)

# r = A*xls-b
# print("The norm of residual is: ", norm(r,2))

# pyplot(size=(500,500), legend=false)
# plot1 = scatter(D[:,1],D[:,2])
# plot!(t->p1(t), xlim...)
# savefig(plot1, "img/hw1_p2_o1.eps")

# for d in 1:5
#     pp = polyfit(D[:,1], D[:,2], d)
#     plot_t = scatter(D[:,1],D[:,2])
#     plot!(t->pp(t),xlim..., grid = false)
#     savefig(plot_t, "img/hw1_p2_o$(d).eps")
#     r= pp(D[:,1])-b;
#     print("The norm of residual for d = $(d) is: $(norm(r,2))\n")
# end

print("\nQuestion 3\n")
m = [10, 100, 100, 100, 100]
n = [20, 200, 2000, 20000, 200000]

for k in 1:5
    A = randn(m[k],n[k])
    x = randn(n[k])
    b = A*x
    ~, t1 = @timed begin
        F = qr(A') 
        x1 = F.Q*(F.R'\b)
    end

    ~, t2 = @timed begin
        x2 = A\b
    end


    print("norm(x1-x2) = $(norm(x1-x2)), QR elapsed time = $(t1), backslash elapsed time  = $(t2)\n")
end
