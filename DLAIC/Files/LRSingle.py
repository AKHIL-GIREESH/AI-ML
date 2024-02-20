import numpy as np

def lineEqn(w,b,x):
    return ((w*x) + b)

def costFunction(w,b,x,y,m):
    cost = 0
    for i in range(m):
        cost += (lineEqn(w,b,x[i]) - y[i])**2
    return (cost/(2*m))

def gradientCalc(w, b, x, y, m):
    dj_dw, dj_db = 0, 0
    for i in range(m):
        prediction = lineEqn(w, b, x[i])
        dj_db += (prediction - y[i])
        dj_dw += (prediction - y[i]) * x[i]
    return dj_dw/m, dj_db/m


def gradientDescent(w,b,x,y,m,alpha,steps):
    for i in range(steps):
        print("Step = ",i,"Cost = ",costFunction(w,b,x,y,m))
        dj_dw,dj_db = gradientCalc(w,b,x,y,m)
        w -= alpha*dj_dw
        b -= alpha*dj_db


x = np.array([100,200])
y = np.array([300,500])
w = 0
b = 0
m = len(x)
alpha = 0.00003
steps = 20

gradientDescent(w,b,x,y,m,alpha,steps)