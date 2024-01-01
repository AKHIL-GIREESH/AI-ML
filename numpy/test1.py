import numpy as np

x = np.array([[[1,2,3],[4,5,6],[7,8,9]],[[1,1,1],[0,0,0],[0,0,0]]])
print(x.shape)
print(x.ndim)

a = [1,2,3]
b = [4,5,6]

p = np.array(a)
q = np.array(b)

print(p+q)