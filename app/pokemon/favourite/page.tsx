"use client"

import { selectPokemons, useSelector } from "@/lib/redux";
import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/lib/type";

export default function FavouritePokemon() {
  const pokemons = useSelector(selectPokemons);

  return (
    <div className="container max-w-7xl mx-auto p-10">
      <Header
        title="Pokedéx"
        description="All the Pokémon data you'll ever need in one place"
        showSearchIcon
      />
      <h1 className="text-2xl mt-10">Favourite Pokemons</h1>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
}
