import numpy as np

arr = np.array([
                [
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ],
                [
                    [1,1,1],
                    [0,0,0],
                    [0,0,0]
                ]
               ])

print(np.delete(arr, 1, axis=0),"\n------------\n")

print(np.delete(arr, 1, axis=1),"\n------------\n")

print(np.delete(arr, 1, axis=2),"\n------------\n")