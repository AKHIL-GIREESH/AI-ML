import pandas as pd

pokemonData = pd.read_csv("pokemon_data.csv")

print(pokemonData.head(3))
print("X---------------------X")

print(pokemonData.columns)
print("X---------------------X")

print(pokemonData.iloc[1])
print("X---------------------X")

print(pokemonData.loc[pokemonData["Legendary"] == True])
print("X---------------------X")

#print(pokemonData.sort_values())

