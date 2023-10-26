"use client";

import { selectPokemons, useSelector } from "@/lib/redux";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/lib/type";

export default function FavouritePokemon() {
  const pokemons = useSelector(selectPokemons);

  return (
    <div className="grid grid-cols-3 gap-6 mt-12">
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </div>
  );
}
