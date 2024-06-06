import numpy as np


def lineEqn(w, x, b):
    return np.dot(w, x)+b


def sigmoid(w, x, b):
    return 1/(1+np.exp(-lineEqn(w, x, b)))


def Dense(W, a_in, b):
    a_out = np.zeros(W.shape[1])
    for i in range(W.shape[1]):
        w = W[:, i]  # method to select the ith column which is w[l]i
        _b = b[i]
        a_out[i] = sigmoid(w, a_in, _b)
    return a_out


# def Dense_Vectorized(W, A_in, B):  # all the params need to be matrices
    # Z = np.matmul(A_in, W) + B  # matrix multiplication followed by addition
    # A_out = g(Z)
    # return A_out


def Sequence(W1, b1, W2, b2, a_in):
    a1 = Dense(W1, a_in, b1)
    a2 = Dense(W2, a1, b2)
    return a2


def predict(W1, b1, W2, b2, a_in):
    m = a_in.shape[0]  # no.of row aka no.of data items
    # 2-D array where m and 1 are the number of rows & columns👇
    p = np.zeros((m, 1))
    for i in range(m):
        # model, p[i,0] stores the probability returned by the Sequence in the 0th column of ith row
        p[i, 0] = Sequence(W1, b1, W2, b2, a_in[i])
    return p


W1_tmp = np.array([[-8.93,  0.29, 12.9], [-0.1,  -7.32, 10.81]])
b1_tmp = np.array([-9.82, -9.28,  0.96])
W2_tmp = np.array([[-31.18], [-27.59], [-32.56]])
b2_tmp = np.array([15.41])

X_tst = np.array([
    [-0.47, 0.42],
    [-0.47, 3.16]])

print(predict(W1_tmp, b1_tmp, W2_tmp, b2_tmp, X_tst))
