const MAX_DEX_ID = 593;
export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokedexNumber = Math.floor(Math.random() * (MAX_DEX_ID - 1)) + 1;
  if (pokedexNumber !== notThisOne) {
    return pokedexNumber;
  } else {
    return getRandomPokemon(notThisOne);
  }
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
};
