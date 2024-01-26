import pandas as pd
import re

attSheet3 = pd.read_csv("./Registration.csv")

attSheet3 = attSheet3[['NAME','PHONE','COLLEGE NAME']].iloc[130:]
attSheet3 = attSheet3.drop_duplicates(subset='PHONE',keep='first')
print(attSheet3)

# print(attSheet3.columns)
# attSheet3 = attSheet3[['Name','Phone no','College']].loc[~attSheet3['College'].str.contains('^f[a-z]*',flags=re.I,regex=True)]
# print(attSheet3)


attSheet3.to_csv('MRegistration.csv')