import numpy as np
import matplotlib.pyplot as plt
#plt.style.use('./deeplearning.mplstyle')

def computeLinearRegression(w,b,xtrain):
    m = len(xtrain)
    f_wb = np.zeros(m)

    for i in range(m):
        f_wb[i] = w*xtrain[i]+b
    return f_wb


w = 200
b = 100
print(f"w: {w}")
print(f"b: {b}")

x_train = np.array([0,1,2])
y_train = np.array([0,300,500])

print(f"x_train = {x_train}")
print(f"y_train = {y_train}")

m = len(x_train)
print(f"No.of training Samples (m) = {m}")

tmp_f_wb = computeLinearRegression(w,b,x_train)

plt.plot(x_train, tmp_f_wb, c='b',label='Our Prediction')
# Plot the data points
plt.scatter(x_train, y_train, marker='x', c='r')
# Set the title
plt.title("Housing Prices")
# Set the y-axis label
plt.ylabel('Price (in 1000s of dollars)')
# Set the x-axis label
plt.xlabel('Size (1000 sqft)')
plt.legend()
plt.show()