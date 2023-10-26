"use client";

import { selectPokemons, useSelector } from "@/lib/redux";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/lib/type";
import clsx from "clsx";
import Image from "next/image";
import { miltonian } from "@/lib/fonts";

export default function FavouritePokemon() {
  const pokemons = useSelector(selectPokemons);

  return (
    <>
      <h1
        className={clsx(
          "text-5xl text-center font-bold text-blue-500 pb-8",
          miltonian.className
        )}
      >
        FAVOURITE POKEDEX
      </h1>
      {pokemons.length === 0 ? (
        <div className="flex items-center justify-center flex-col mt-10">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
            width={300}
            height={300}
            alt="no-favourite"
          />
          <h1 className="text-2xl text-blue-500 pt-8">
            Upss.. you don&apos;t have favourite pokemon
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {pokemons.map((pokemon: Pokemon, index: number) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </div>
      )}
    </>
  );
}
