import matplotlib.pyplot as plt
import numpy as np

X_Data = np.random.random(50) * 20
Y_Data = np.random.random(50) * 100

plt.scatter(X_Data,Y_Data)
plt.show()