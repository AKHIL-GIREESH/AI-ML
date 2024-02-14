import time
import numpy as np

sum = 0
w,x = [10,20,30,40,50,10,20,30,40,50,10,20,30,40,50],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
def NUMPY_FUNC():
    sum = 0
    start = time.time()
    for i in range(15):
        sum += w[i]*x[i]
    end = time.time()
    print("Sum = ",sum,"Time = ",end-start)

def PYTHON_FUNC():
    start = time.time()
    sum = np.dot(w,x)
    end = time.time()
    print("Sum = ",sum,"Time = ",end-start)

PYTHON_FUNC()
NUMPY_FUNC()