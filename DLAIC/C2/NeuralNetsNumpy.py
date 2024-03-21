import numpy as np

def lineEqn(w,x,b):
    return np.dot(w,x)+b

def sigmoid(w,x,b):
    return 1/(1+np.e(-lineEqn(w,x,b)))

def Dense(W,a_in,b):
    a_out = np.zeros(W.shape[1])
    for i in range(W.shape[1]):
        w = W[:,i]
        b = b[i]
        a_out[i] = sigmoid(w,a_in,b)
    return a_out

def Sequence(W1,b1,W2,b2,a_in,):

    return


W1_tmp = np.array( [[-8.93,  0.29, 12.9 ], [-0.1,  -7.32, 10.81]] )
b1_tmp = np.array( [-9.82, -9.28,  0.96] )
W2_tmp = np.array( [[-31.18], [-27.59], [-32.56]] )
b2_tmp = np.array( [15.41] )

X_tst = np.array([
    [200,13.9],  
    [200,17]])

Dense(W1_tmp,b1_tmp,X_tst)