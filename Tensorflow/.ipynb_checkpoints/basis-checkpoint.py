import tensorflow as tf

#Initialization
x1= tf.constant(4, shape=(1,1), dtype=tf.float32)

x2 = tf.ones((3,3)) # n-dimensional tensor of ones

x3 = tf.zeros((3,3)) # n-dimensional tensor of zeroes

x4 = tf.eye(3) # Identity matrix of n-dimensions

print(x4)