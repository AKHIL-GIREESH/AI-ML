import numpy as np
import pandas as pd


trainSet = pd.read_csv("../../../mnist_784.csv")[:1000].to_numpy()
testSet = pd.read_csv("../../../mnist_784.csv")[1000:1020].to_numpy()

X = trainSet[:, :784]
Y = trainSet[:, 784:]

X_test = testSet[:, :784]
Y_test = testSet[:, 784:]

print(X.shape)


def initWeights():
    neuron1 = 25
    neuron2 = 15
    neuron3 = 10
    return


def softmax(Z):
    return


def relu(Z):
    return np.maximum(0, Z)


def Cost():
    return


def gradientRelu():
    return


def backPropagation():
    return


def gradientDescend():
    return


def forwardPropagation():
    return


def start():
    return


start()
