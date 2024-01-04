import pandas as pd

pokemonData = pd.read_csv("pokemon_data.csv")

print(pokemonData.head(3))
print("\nX---------------------X\n")

print(pokemonData.columns)
print("\nX---------------------X\n")

print(pokemonData.iloc[1])
print("\nX---------------------X\n")

print(pokemonData.loc[(pokemonData["Legendary"] == True) & (pokemonData["HP"] > 100)])
print("\nX---------------------X\n")

#print(pokemonData.sort_values())

pokemonData.loc[(pokemonData["Legendary"] == True) & (pokemonData["HP"] > 100),["Legendary"]] = "Too Legendary"
print(pokemonData)
print("\nX---------------------X\n")

#pokemonData.to_csv("newPoke.csv")
