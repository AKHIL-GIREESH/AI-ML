import tensorflow as tf
import numpy as np


steps = 150
A0 = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
Y = np.array([0, 1, 1, 0])

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


def gradientSigmoid():
    return


def gradientDescend():
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


start()
