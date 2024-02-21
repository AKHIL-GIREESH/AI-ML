import numpy as np

def lineEqn(w,b,x):
    return np.dot(w,x)+b

def sigmoidFunc(w,b,x):
    return 1/(1+np.exp(-lineEqn(w,b,x)))

def costFunc(w,b,x,y,m):
    cost = 0
    for i in range(m):
        cost += -y[i]*np.log(sigmoidFunc(w,b,x[i])) - (1-y[i])*np.log(1-sigmoidFunc(w,b,x[i]))
    return cost / m

def gradientCalc(w,b,x,y,m,n):
    dj_dw,dj_db = np.zeros(n),0
    for i in range(m):
        difference = sigmoidFunc(w,b,x[i]) - y[i]
        dj_db += difference
        for j in range(n):
            dj_dw[j] += difference*x[i][j]
    return dj_dw/m, dj_db/m

def gradientDescent(w,b,x,y,m,n,alpha,steps):
    for i in range(steps):
        print(costFunc(w,b,x,y,m))
        dj_dw,dj_db = gradientCalc(w,b,x,y,m,n)
        b -= alpha*dj_db
        for j in range(n):
            w[j] -= alpha*dj_dw[j]


x = np.array([[0.5, 1.5], [1,1], [1.5, 0.5], [3, 0.5], [2, 2], [1, 2.5]])
y = np.array([0, 0, 0, 1, 1, 1])

m=len(x)
n = len(x[0])

w = np.zeros(n)
b = 0

alpha = 0.9
steps = 20

gradientDescent(w,b,x,y,m,n,alpha,steps)