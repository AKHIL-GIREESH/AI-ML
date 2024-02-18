import numpy as np
import matplotlib.pyplot as plt


def lineEqn(w,b,x):
    return (w*x + b)

def costFunction(w,b,x,y,m):
    cost = 0
    for i in range(m):
        cost += (lineEqn(w,b,x[i]) - y[i])**2
    return (cost/(2*m))

def gradientCalc(w,b,x,y,m):
    dj_dw,dj_db = 0,0
    for i in range(m):
        dj_dw +=  (lineEqn(w,b,x[i]) - y[i])*x[i]
        dj_dw +=  (lineEqn(w,b,x[i]) - y[i])
    return (dj_dw/m),(dj_db/m)

def gradientDescent(w,b,x,y,m,alpha,steps):
    print(costFunction(w,b,x,y,m))

    dj_dw,dj_db = gradientCalc(w,b,x,y,m,alpha)
    pass


x = np.array([1.0, 2.0])
y = np.array([300.0, 500.0])
w = 0
b = 0
m = len(x)
alpha = 8.0e-1
steps = 20

print(costFunction(w,b,x,y,m))