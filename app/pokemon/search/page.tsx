"use client";

import clsx from "clsx";
import axios from "axios";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BASE_URL } from "@/lib/constant";
import { miltonian } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { Pokemon } from "@/lib/type";
import PokemonCard from "@/components/PokemonCard";

export default function PokemonSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchPokemon = useCallback(async () => {
    const { data } = await axios.get<Pokemon>(
      `${BASE_URL}/pokemon/${search?.toLowerCase()}`
    );

    setPokemon(data);
  }, [search, setPokemon]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (search) {
      searchPokemon();
    }
  }, [search, searchPokemon]);

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
      <div className="w-full rounded-lg p-4 border-blue-500 border-2 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center flex-1">
          <Search className="text-blue-500 hidden md:block" size={24} />
          <input
            value={searchQuery}
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search here..."
            className="outline-none  md:ml-4 w-full flex-1 bg-transparent placeholder:text-sm placeholder:md:text-base"
          />
        </div>
        <Button
          className="bg-[#FFCB03] text-blue-600 px-8 text-[10px] md:text-sm hover:bg-[#FFCB03]"
          onClick={() => {
            router.push(pathname + "?" + createQueryString("q", searchQuery));
          }}
        >
          Search
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </>
  );
}
