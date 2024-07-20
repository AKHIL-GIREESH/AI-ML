import tensorflow as tf
import numpy as np


steps = 150
A0 = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
Y = np.array([[0], [1], [1], [0]])

X_test = np.array([[0, 0], [1, 1], [1, 0], [0, 1], [1, 1], [0, 1]])

layerCount = 2


def initWeights():
    neuron1 = 3
    W1 = np.zeros([A0[0].shape[0], neuron1])
    B1 = np.zeros(neuron1)

    neuron2 = 1
    W2 = np.zeros([neuron1, neuron2])
    B2 = np.zeros(neuron2)

    return W1, B1, W2, B2


def sigmoid(Z):
    return 1/(1+np.exp(-Z))


def relu(Z):
    return np.maximum(0, Z)


def Cost(A):
    AC = A.flatten()
    print("AC = ", AC)
    cost = 0
    m = A.shape[0]
    cost = -np.sum(Y*np.log(AC) + (1-Y)*np.log(1-AC))/m
    return cost


def gradientRelu(Z):
    return Z > 0


def gradientSigmoid(A2, A1):

    m = A1.shape[0]
    n = A1.shape[1]

    dJ_dw = np.zeros((n, 1))
    dJ_db = 0

    for i in range(m):
        diff = A2[i]-Y[i][0]
        dJ_db += diff
        for j in range(n):
            dJ_dw[j] += diff*A1[i][j]
    return dJ_db/m, dJ_dw/m


def backpropagation(A1, A2, W1, W2, B1, B2, Z1):

    dJ_dB2, dJ_dW2 = gradientSigmoid(A2, A1)
    dJ_dZ2 = (Y-A2)/A2.shape[0]

    dJ_dA1 = np.dot(dJ_dZ2, W2.T)
    dJ_dZ1 = dJ_dA1 * gradientRelu(Z1)
    dJ_dW1 = np.dot(A0.T, dJ_dZ1) / A2.shape[0]
    dJ_dB1 = np.sum(dJ_dZ1, axis=0, keepdims=True) / A2.shape[0]

    return dJ_dW1, dJ_dB1, dJ_dW2, dJ_dB2


def gradientDescend(W1, B1, W2, B2, A1, A2, cost, Y, Z1):
    backpropagation(A1, A2, W1, W2, B1, B2, Z1)

    dJ_dA1 = 0
    dJ_db2, dJdw2 = 0, 0
    return


def forwardProp(W1, B1, W2, B2):
    Z1 = np.matmul(A0, W1)+B1
    A1 = relu(Z1)
    # print(A1)

    Z2 = np.matmul(A1, W2)+B2
    A2 = sigmoid(Z2)
    # print(A2)

    cost = Cost(A2)
    return cost, Z1, A1, Z2, A2


def start():
    W1, B1, W2, B2 = initWeights()
    cost, Z1, A1, Z2, A2 = forwardProp(W1, B1, W2, B2)
    print(cost)

    gradientDescend(W1, B1, W2, B2, A1, A2, cost, Y, Z1)


start()
