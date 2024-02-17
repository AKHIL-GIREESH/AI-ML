import pandas as pd;

df = pd.read_csv("income.csv",names=["name","income"],skiprows=[0])
print(df.describe()) #Gives you basic statistics of a dataframe such as count,mean,min,max,etc.