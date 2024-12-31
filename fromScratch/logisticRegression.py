import numpy as np


def lineEqn(W,b,X):
    return np.dot(W,X)+b

def sigmoidFunc(W,b,X):
    return 1/(1+np.exp(-lineEqn(W,b,X)))

def costFunc(W,b,X,y,m):
    return -(np.sum(y * np.log(sigmoidFunc(W,b,X)) + (1-y)*np.log(1-sigmoidFunc(W,b,X))))/m

def gradientCalc(W,b,X,y,m):
    error = sigmoidFunc(W,b,X) - y
    dj_dw = (1/m)*np.dot(X.T,error)
    dj_db = np.sum(error)/m
    return dj_dw,dj_db 


def gradientDescend(W,b,X,y,m,alpha,steps):
    for i in range(steps):
        print(f"Cost function @Step{i} = {costFunc(W,b,X,y,m)}")
        dj_dw,dj_db = gradientCalc(W,b,X,y,m)
        W -= alpha*dj_dw
        b -= alpha*dj_db
    return W,b


