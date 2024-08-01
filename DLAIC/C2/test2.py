import numpy as np

steps = 1000
A0 = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
Y = np.array([[0], [1], [1], [0]])

X_test = np.array([[0, 0], [1, 1], [1, 0], [0, 1], [1, 1], [0, 1]])


def initWeights():
    neuron1 = 4
    W1 = np.random.randn(A0.shape[1], neuron1)
    B1 = np.zeros((1, neuron1))

    neuron2 = 1
    W2 = np.random.randn(neuron1, neuron2)
    B2 = np.zeros((1, neuron2))

    return W1, B1, W2, B2


def sigmoid(Z):
    return 1/(1+np.exp(-Z))


def relu(Z):
    return np.maximum(0, Z)


def Cost(A, Y):
    m = A.shape[0]
    cost = -np.sum(Y*np.log(A) + (1-Y)*np.log(1-A))/m
    return cost


def gradientRelu(Z):
    return Z > 0


def backpropagation(A0, A1, A2, W1, W2, B1, B2, Z1, Y):
    m = Y.shape[0]

    dJ_dZ2 = A2 - Y
    dJ_dW2 = np.dot(A1.T, dJ_dZ2) / m
    dJ_dB2 = np.sum(dJ_dZ2, axis=0, keepdims=True) / m

    dJ_dA1 = np.dot(dJ_dZ2, W2.T)
    dJ_dZ1 = dJ_dA1 * gradientRelu(Z1)
    dJ_dW1 = np.dot(A0.T, dJ_dZ1) / m
    dJ_dB1 = np.sum(dJ_dZ1, axis=0, keepdims=True) / m

    return dJ_dW1, dJ_dB1, dJ_dW2, dJ_dB2


def gradientDescent(W1, B1, W2, B2, A1, A2, cost, Y, Z1, alpha):
    dJ_dW1, dJ_dB1, dJ_dW2, dJ_dB2 = backpropagation(
        A0, A1, A2, W1, W2, B1, B2, Z1, Y)

    W1 -= alpha * dJ_dW1
    B1 -= alpha * dJ_dB1
    W2 -= alpha * dJ_dW2
    B2 -= alpha * dJ_dB2

    return W1, B1, W2, B2


def forwardProp(W1, B1, W2, B2, A0):
    cost = 0
    Z1 = np.dot(A0, W1) + B1
    A1 = relu(Z1)

    Z2 = np.dot(A1, W2) + B2
    A2 = sigmoid(Z2)

    if A0.shape[0] == Y.shape[0]:
        cost = Cost(A2, Y)
    return cost, Z1, A1, Z2, A2


def start():
    W1, B1, W2, B2 = initWeights()
    for i in range(steps):
        cost, Z1, A1, Z2, A2 = forwardProp(W1, B1, W2, B2, A0)
        W1, B1, W2, B2 = gradientDescent(
            W1, B1, W2, B2, A1, A2, cost, Y, Z1, 0.09)
        if i % 10 == 0:
            print(f"Cost at step {i}: {cost}")
            print(A2)

    cost, Z1, A1, Z2, A2 = forwardProp(W1, B1, W2, B2, X_test)
    print("\nFinal Output = ", A2)


start()
