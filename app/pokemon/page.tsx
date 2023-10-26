import clsx from "clsx";
import Link from "next/link";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon } from "@/lib/type";
import { Button } from "@/components/ui/button";
import { getPokemons } from "@/lib/apiClient";
import { getOffset } from "@/lib/utils";
import { miltonian } from "@/lib/fonts";

export default async function PokemonList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const offset =
    typeof searchParams.offset === "string" ? Number(searchParams.offset) : 0;

  const pokemon = await getPokemons(offset);
  return (
    <>
      <h1
        className={clsx(
          "text-5xl text-center font-bold text-blue-500 pb-8",
          miltonian.className
        )}
      >
        POKEDEX
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {pokemon.data.map((pokemon: Pokemon, index: number) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
      <div className="flex flex-row mt-4 gap-4">
        {pokemon.previous && (
          <Link href={`/pokemon?offset=${getOffset(pokemon.previous)}`}>
            <Button className="bg-transparent text-[#FFCB03] border-[#FFCB03] border-2 px-8 text-sm hover:bg-transparent">
              Prev Page
            </Button>
          </Link>
        )}
        {pokemon.next && (
          <Link href={`/pokemon?offset=${getOffset(pokemon.next)}`}>
            <Button className="bg-[#FFCB03] text-blue-600 px-8 text-sm hover:bg-[#FFCB03]">
              Next Page
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}
