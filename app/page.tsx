import { Pokemon } from "@/utils/type";
import PokemonCard from "./_components/PokemonCard";
import { BASE_URL } from "@/utils/constant";
import Header from "./_components/Header";

async function getPokemon() {
  const res = await fetch(`${BASE_URL}?limit=12`);
  const data = await res.json();

  const results = data.results;
  const promisesArray = results.map(async (result: { url: string }) => {
    const response = await fetch(result.url);
    return response.json();
  });

  const pokemonData = await Promise.all(promisesArray);
  return pokemonData;
}

export default async function Home() {
  const pokemons = await getPokemon();

  return (
    <div className="container max-w-7xl mx-auto p-10">
      <Header
        title="Pokedéx"
        description="All the Pokémon data you'll ever need in one place"
        showSearchIcon
      />
      <div className="grid grid-cols-3 gap-6 mt-12">
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
}
