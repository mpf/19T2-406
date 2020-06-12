using Random
using LinearAlgebra
using Convex
using ECOS
using Plots
using JLD
using CSV
using DataFrames

Random.seed!(3)
m = 100;
n = 50;
x0 = randn(n,1);
x0[rand(n).>.1] .= 0;
x0 = cumsum(x0,dims=1)
# save signal
save("docs/homework/hw2/hw2_p2_smooth_signal.jld","data", x0)
CSV.write("docs/homework/hw2/hw2_p2_smooth_signal.csv", DataFrame(x0), writeheader=false)

# load signal
x0 = load("docs/homework/hw2/hw2_p2_smooth_signal.jld")["data"]

AA = randn(m,n);
bb = AA*x0+randn(m)./5;
# save data
save("docs/homework/hw2/hw2_p2_smooth_A.jld","data", AA)
CSV.write("docs/homework/hw2/hw2_p2_smooth_A.csv", DataFrame(AA), writeheader=false)

save("docs/homework/hw2/hw2_p2_smooth_b.jld","data", bb)
CSV.write("docs/homework/hw2/hw2_p2_smooth_b.csv", DataFrame(bb), writeheader=false)

# load data
A = load("docs/homework/hw2/hw2_p2_smooth_A.jld")["data"]
b = load("docs/homework/hw2/hw2_p2_smooth_b.jld")["data"]

x1 = Variable(n);

loss = sumsquares(A*x1-b)
reg = norm(x1,1)

λ = 10
problem = minimize(loss+λ*reg)
solve!(problem,ECOSSolver(Verbose=1))

free!(x1)
xa = x1.value;

λ = .001
problem = minimize(loss+λ*reg)
solve!(problem,ECOSSolver(Verbose=1))

xb = x1.value;

# generate logspace between -3,3

Lambda = exp10.(range(-3, stop=3, length=50))


plot(x0)
plot!(xa)
plot!(xb)
