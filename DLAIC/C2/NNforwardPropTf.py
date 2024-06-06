import numpy as np
import tensorflow as tf

from keras.layers import Dense
from keras.models import Sequential


X = np.array([[185.32, 12.69],
              [259.92, 11.87],
              [231.01, 14.41],
              [175.37, 11.72],
              [187.12, 14.13]])

Y = np.array([[1.],
              [0.],
              [0.],
              [0.],
              [1.]])

print("Temp max & min b4 norm:")
print(np.max(X[:, 0]), np.min(X[:, 0]))
print("Duration max & min b4 norm:")
print(np.max(X[:, 1]), np.min(X[:, 1]))
norm_l = tf.keras.layers.Normalization(
    axis=-1)  # Normalizes the features/columns
norm_l.adapt(X)  # learns mean, variance
Xn = norm_l(X)
print("Temp max & min post norm:")
print(np.max(Xn[:, 0]), np.min(Xn[:, 0]))
print("Duration max & min post norm:")
print(np.max(Xn[:, 1]), np.min(Xn[:, 1]))

# Look into tiles and set_seed

model = Sequential([
    # defines the shape of the input data to NN.In this case, each input sample is a 1D array (vector) with 2 elements.
    tf.keras.Input(shape=(2,)),
    Dense(3, activation="sigmoid", name="l1"),
    Dense(1, activation="sigmoid", name="l2")
])

model.summary()

model.compile(
    loss=tf.keras.losses.BinaryCrossentropy(),
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.01),
)

model.fit(
    Xn, Y,
    epochs=10,
)

# Set weights from a previous run.
W1 = np.array([
    [-8.94,  0.29, 12.89],
    [-0.17, -7.34, 10.79]])
b1 = np.array([-9.87, -9.28,  1.01])
W2 = np.array([
    [-31.38],
    [-27.86],
    [-32.79]])
b2 = np.array([15.54])

# Replace the weights from your trained model with
# the values above.
model.get_layer("l1").set_weights([W1, b1])
model.get_layer("l2").set_weights([W2, b2])

# Check if the weights are successfully replaced
W1, b1 = model.get_layer("l1").get_weights()
W2, b2 = model.get_layer("l2").get_weights()
print("W1:\n", W1, "\nb1:", b1)
print("W2:\n", W2, "\nb2:", b2)

# Testing for other data
X_test = np.array([
    [200, 13.9],  # positive example
    [200, 17]])   # negative example
X_testn = norm_l(X_test)
predictions = model.predict(X_testn)
print("predictions = \n", predictions)

yhat = np.zeros_like(predictions)
for i in range(len(predictions)):
    if predictions[i] >= 0.5:
        yhat[i] = 1
    else:
        yhat[i] = 0
print(f"decisions = \n{yhat}")

yhat = (predictions >= 0.5).astype(int)
print(f"decisions = \n{yhat}")
