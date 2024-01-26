import pandas as pd
import re

attSheet3 = pd.read_excel("./attSheet3.xlsx", index_col=0)

print(attSheet3.columns)
attSheet3 = attSheet3[['NAME','PHONE','COLLEGE NAME']].loc[~attSheet3['COLLEGE NAME'].str.contains('^f[a-z]*',flags=re.I,regex=True)]
print(attSheet3)