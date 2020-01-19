using Random
using LinearAlgebra
using Convex
using ECOS
using Plots
using JLD
using CSV
using ForwardDiff
using DataFrames

Random.seed!(317)

C = randn(2,5)
x = randn(2,1)
d = sqrt.(sum((C - x*ones(1,5)).^2,dims=1)) .+ 0.05.*randn(1,5)
d= d'


# save signal
save("docs/homework/hw2/hw2_p3_signal.jld","data", x)
CSV.write("docs/homework/hw2/hw2_p3_signal.csv", DataFrame(x), writeheader=false)

# load signal
x = load("docs/homework/hw2/hw2_p3_signal.jld")["data"]

# save data
save("docs/homework/hw2/hw2_p3_C.jld","data", C)
CSV.write("docs/homework/hw2/hw2_p3_C.csv", DataFrame(C), writeheader=false)

save("docs/homework/hw2/hw2_p3_d.jld","data", d)
CSV.write("docs/homework/hw2/hw2_p3_d.csv", DataFrame(d), writeheader=false)

#  load data
C =load("docs/homework/hw2/hw2_p3_C.jld")["data"]
d =load("docs/homework/hw2/hw2_p3_d.jld")["data"]

