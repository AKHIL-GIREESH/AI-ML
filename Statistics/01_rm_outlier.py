import pandas as pd
import numpy as np

df = pd.read_csv("income.csv",names=["name","income"],skiprows=[0])
print(df)
print(df.describe()) #Gives you basic statistics of a dataframe such as count,mean,min,max,etc.
print(df.income.quantile(0.75,interpolation="higher")) #returns the quantile of the respective column. Quantile is just percentile but then its value is btw 0 and 1.

#Removing outlier - Percentile > 99

df_no_outlier = df[df.income<=df.income.quantile(0.99)]
print(df_no_outlier)

#Filling missing Values

modf = df
modf["income"][3] = np.NaN

print(modf)

modf = modf.fillna(modf.income.median()) #median is a better choice than mean here
print(modf)