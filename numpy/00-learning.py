import numpy as np


x = np.array([[1, 2], [3, 4], [5, 6]])

m, n = np.zeros(2), np.zeros(2)

for i in range(x.shape[0]):
    for j in range(len(x[i])):
        m[j] += x[i][j]
    # a, b = x[i]
    # print(a, b)

    # m[0] += a
    # m[1] += b

print(m/x.shape[0], n)
