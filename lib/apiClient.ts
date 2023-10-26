import { BASE_URL } from "./constant";

export async function getPokemon(offset: string | number) {
  const res = await fetch(`${BASE_URL}?limit=12&offset=${offset}`);
  const data = await res.json();

  const results = data.results;
  const promisesArray = results.map(async (result: { url: string }) => {
    const response = await fetch(result.url);
    return response.json();
  });

  const pokemonData = await Promise.all(promisesArray);

  const allObjects = { next: data.next, previous: data.previous, data: pokemonData };
  return allObjects;
}
