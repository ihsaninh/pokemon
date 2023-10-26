'use client'

import { Pokemon } from "@/lib/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const router = useRouter()
  
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow cursor-pointer" onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
      <div className="flex flex-row justify-between items-center">
        <div className="px-6 py-4">
          <h4>#{pokemon.order}</h4>
          <p className="text-gray-700 text-3xl font-medium">
            {pokemon.name}
          </p>
        </div>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="pokemon-image"
          width={100}
          height={100}
        />
      </div>
      <div className="flex gap-2 flex-row px-6  py-4">
        {pokemon.types.map((item, index) => (
          <div className="py-1 px-2 rounded border" key={index}>
            <p>{item.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
