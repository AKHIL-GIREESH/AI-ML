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
    return 1/1+np.exp(-Z)


def relu(Z):
    return np.maximum(0, Z)


def Cost():
    return


def gradient():
    return


def gradientDescend():
    return


def forwardProp():
    W1, B1, W2, B2 = initWeights()
    print(W1)
    return


def start():
    forwardProp()


start()
