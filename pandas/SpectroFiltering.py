import pandas as pd
import re

attSheet3 = pd.read_excel("./attSheet7.xlsx")

print(attSheet3.columns)
attSheet3 = attSheet3[['NAME','PHONE','COLLEGE NAME']].loc[~attSheet3['COLLEGE NAME'].str.contains('^f[a-z]*',flags=re.I,regex=True)]
print(attSheet3)

attSheet3.to_csv('MattSheet7.csv')