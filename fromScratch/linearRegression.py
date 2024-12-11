import numpy as np


def lineEqn(X,W,b):
    return np.dot(X,W)+b

def costFunc(W,b,y,X,m):
    error = lineEqn(X,W,b) - y
    return ((1/2*m)*np.sum(error ** 2))

def gradientCalc(W,b,y,X,m):
    error = lineEqn(X,W,b) - y
    dW = (1/m)* np.dot(X.T,error) 
    db = (1/m)* np.sum(error)
    return dW,db

def gradientDescend(W,b,X,y,m,alpha,steps):
    for i in range(steps):
        print(f"Cost Function @step {i} = {costFunc(W,b,y,X,m)}")
        
        dW,db = gradientCalc(W,b,y,X,m)
        W = W - alpha*dW
        b = b - alpha*db

    return  W,b


# New example dataset: features X and target variable y
# X = [[years of experience, number of projects], ...]
X = np.array([[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]])

# y = 30000 + 10000*experience + 5000*projects
y = np.array([30000 + 10000*exp + 5000*proj for exp, proj in X])  # Salary based on the equation

# Initializing parameters
W = np.array([1000.0, 2000.0])  # Initial weights (set closer to true values)
b = 30000  # Initial bias (set closer to true value)
m = len(X)  # Number of training examples
alpha = 0.00001  # Learning rate (fine-tuned for this simple dataset)
steps = 100  # Number of gradient descent iterations

# Running gradient descent
W, b = gradientDescend(W, b, X, y, m, alpha, steps)
print("Final W and b are:", W, b)
