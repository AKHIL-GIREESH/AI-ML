import numpy as np


def lineEqn(w, x, b):
    return (w*x+b)


def costFunc(x, y, w, b, m):
    cost = 0
    for i in range(m):
        cost += (lineEqn(w, x[i], b)-y[i])**2
    return (cost/(2*m))


def gradientCalc(x, y, w, b, m):
    dJ_dw, dJ_db = 0, 0
    for i in range(m):
        dJ_dw += (lineEqn(w, x[i], b) - y[i])*x[i]
        dJ_db += (lineEqn(w, x[i], b) - y[i])
    return dJ_dw/m, dJ_db/m


def gradientDescent(x, y, w, b, m, alpha, steps):
    for i in range(steps):
        print("Iter = ", i, " Cost = ", costFunc(x, y, w, b, m))
        dJ_dw, dJ_db = gradientCalc(x, y, w, b, m)
        w -= alpha*dJ_dw
        b -= alpha*dJ_db
    return


x = np.array([100, 200])
y = np.array([300, 500])
w = 0
b = 0
m = len(x)
alpha = 0.00003
steps = 20

gradientDescent(x, y, w, b, m, alpha, steps)
