import numpy as np


def lineEqn(w,b,x):
    return (np.dot(w,x) + b)

def costFunction(w,b,x,y,m):
    cost = 0
    for i in range(m):
        cost += (lineEqn(w,b,x[i]) - y[i])**2
    return (cost/(2*m))

def gradientCalc(w, b, x, y, m,n):
    dj_dw, dj_db = np.zeros(n), 0
    for i in range(m):
        prediction = lineEqn(w, b, x[i])
        dj_db += (prediction - y[i])
        for j in range(n):
            dj_dw[j] += (prediction - y[i]) * x[i][j]
    return dj_dw/m, dj_db/m


def gradientDescent(w,b,x,y,m,n,alpha,steps):
    for i in range(steps):
        print("Step = ",i,"Cost = ",costFunction(w,b,x,y,m))
        dj_dw,dj_db = gradientCalc(w,b,x,y,m,n)
        for j in range(n):
            w[j] -= alpha*dj_dw[j]
        b -= alpha*dj_db


x = np.array([[2104, 5, 1, 45], [1416, 3, 2, 40], [852, 2, 1, 35]])
y = np.array([460, 232, 178])
w = np.array([ 0.39133535, 18.75376741, -53.36032453, -26.42131618])
b = 785.1811367994083
m = len(x)
alpha = 0.0000001
steps = 20
n = len(x[0])

gradientDescent(w,b,x,y,m,n,alpha,steps)
