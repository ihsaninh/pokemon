"use client";

import { useState } from "react";
import Header from "../_components/Header";
import useSWR from "swr";
import PokemonCard from "../_components/PokemonCard";
import { Pokemon } from "@/utils/type";

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [fetch, setFetch] = useState<boolean>(false);
  const { data, error, isLoading } = useSWR<Pokemon>(
    fetch ? `https://pokeapi.co/api/v2/pokemon/${searchValue}` : null,
    fetcher
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFetch(true);
  };

  return (
    <div className="container max-w-7xl mx-auto p-10">
      <Header title="Pokedéx" description="Search yor favourite character" />
      <div className="max-w-2xl mx-auto mt-16">
        <form onSubmit={onSubmit}>
          <div className="relative flex items-center w-full h-14 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              placeholder="Search character.."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </form>
        <div className="mt-8">
          {fetch && (
            <>
              <h5 className="pb-8">Search result for: {searchValue}</h5>
              {data && !isLoading ? (
                <PokemonCard pokemon={data} />
              ) : (
                <h4 className="font-2xl">No result</h4>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
