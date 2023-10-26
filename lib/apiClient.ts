import { BASE_URL } from "./constant";

export async function getPokemons(offset: string | number) {
  const res = await fetch(`${BASE_URL}/pokemon?limit=12&offset=${offset}`);
  const data = await res.json();

  const results = data.results;
  const promisesArray = results.map(async (result: { url: string }) => {
    const response = await fetch(result.url);
    return response.json();
  });

  const pokemonData = await Promise.all(promisesArray);

  const allObjects = {
    next: data.next,
    previous: data.previous,
    data: pokemonData,
  };
  return allObjects;
}

export async function getPokemonDetail(name: string) {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPokemonSpesies(name: string) {
  const res = await fetch(`${BASE_URL}/pokemon-species/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
