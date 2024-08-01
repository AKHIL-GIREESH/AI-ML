import numpy as np

steps = 150
A0 = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
Y = np.array([[0], [1], [1], [0]])

X_test = np.array([[0, 0], [1, 1], [1, 0], [0, 1], [1, 1], [0, 1]])

layerCount = 2


def initWeights():
    neuron1 = 5
    W1 = np.random.randn(A0.shape[1], neuron1) * 0.01
    B1 = np.zeros((1, neuron1))

    neuron2 = 1
    W2 = np.random.randn(neuron1, neuron2) * 0.01
    B2 = np.zeros((1, neuron2))

    return W1, B1, W2, B2


def sigmoid(Z):
    return 1 / (1 + np.exp(-Z))


def relu(Z):
    return np.maximum(0, Z)


def Cost(A):
    AC = A.flatten()
    m = A.shape[0]
    epsilon = 1e-10
    cost = -np.sum(Y * np.log(AC + epsilon) + (1 - Y)
                   * np.log(1 - AC + epsilon)) / m
    return cost


def gradientRelu(Z):
    return Z > 0


def gradientSigmoid(A2, A1):
    m = A1.shape[0]
    n = A1.shape[1]

    dJ_dw = np.zeros((n, 1))
    dJ_db = 0

    for i in range(m):
        diff = A2[i] - Y[i][0]
        dJ_db += diff
        for j in range(n):
            dJ_dw[j] += diff * A1[i][j]
    return dJ_db / m, dJ_dw / m


def backpropagation(A1, A2, W1, W2, B1, B2, Z1):
    dJ_dB2, dJ_dW2 = gradientSigmoid(A2, A1)
    dJ_dZ2 = (A2 - Y)

    dJ_dA1 = np.dot(dJ_dZ2, W2.T)
    dJ_dZ1 = dJ_dA1 * gradientRelu(Z1)
    dJ_dW1 = np.dot(A0.T, dJ_dZ1) / A2.shape[0]
    dJ_dB1 = np.sum(dJ_dZ1, axis=0, keepdims=True) / A2.shape[0]

    return dJ_dW1, dJ_dB1, dJ_dW2, dJ_dB2


def gradientDescend(W1, B1, W2, B2, A1, A2, cost, Y, Z1, alpha):
    dJ_dW1, dJ_dB1, dJ_dW2, dJ_dB2 = backpropagation(
        A1, A2, W1, W2, B1, B2, Z1)

    W1 -= alpha * dJ_dW1
    B1 -= alpha * dJ_dB1
    W2 -= alpha * dJ_dW2
    B2 -= alpha * dJ_dB2

    return W1, B1, W2, B2


def forwardProp(W1, B1, W2, B2, A0):
    Z1 = np.matmul(A0, W1) + B1
    A1 = relu(Z1)

    Z2 = np.matmul(A1, W2) + B2
    A2 = sigmoid(Z2)

    cost = Cost(A2)
    return cost, Z1, A1, Z2, A2


def start():
    W1, B1, W2, B2 = initWeights()
    for i in range(steps):
        cost, Z1, A1, Z2, A2 = forwardProp(W1, B1, W2, B2, A0)
        W1, B1, W2, B2 = gradientDescend(
            W1, B1, W2, B2, A1, A2, cost, Y, Z1, 0.01)
        if i % 10 == 0:
            print(f"Iteration {i}, Cost: {cost}")
            print(A2)

    cost, Z1, A1, Z2, A2 = forwardProp(W1, B1, W2, B2, X_test)
    print(A2)


start()
