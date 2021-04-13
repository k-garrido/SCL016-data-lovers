export const filteredByType = (pokemonData, type) => pokemonData.filter(x => x.type.includes(type));
export const sortA_Z = (pokemonData) => pokemonData.sort((a, b) => {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
});
export const sortZ_A = (pokemonData) => pokemonData.sort((a, b) => {
  return a.name > b.name ? -1 : a.name < b.name ? 1 : 0
});
export const ascending_Sort = (pokemonData) => pokemonData.sort((a, b) => {
  return a.num > b.num ? 1 : a.num < b.num ? -1 : 0
});
export const descending_Sort = (pokemonData) => pokemonData.sort((a, b) => {
  return a.num > b.num ? -1 : a.num < b.num ? 1 : 0
});
