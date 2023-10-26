"use client";

import { BASE_URL } from "@/lib/constant";
import Image from "next/image";
import { Pokemon } from "@/lib/type";
import { StarOff, Star } from "lucide-react";
import useSWR from "swr";
import {
  ReduxState,
  pokemonSlice,
  selectIsPokemonExist,
  useDispatch,
  useSelector,
} from "@/lib/redux";

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function PokemonDetail({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useSWR<Pokemon>(
    `${BASE_URL}/${params.id}`,
    fetcher
  );
  const dispatch = useDispatch();
  const isPokemonExist = useSelector((state: ReduxState) =>
    selectIsPokemonExist(data?.id!)(state)
  );

  const onAddToFavourite = () => {
    dispatch(pokemonSlice.actions.addPokemon(data!));
  };

  return (
    <div className="max-w-4xl mx-auto mt-32 shadow-md p-6 rounded flex flex-col">
      {isPokemonExist ? (
        <Star size={24} className="self-end cursor-pointer" />
      ) : (
        <StarOff
          size={24}
          className="self-end cursor-pointer"
          onClick={onAddToFavourite}
        />
      )}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <p className="text-7xl font-thin pb-2">#{data?.order}</p>
          <p className="text-md font-light pb-2">{data?.types[0].type.name}</p>
          <p className="text-5xl font-semibold">{data?.name}</p>
        </div>
        <Image
          src={data?.sprites.other.home.front_default!}
          height={500}
          width={500}
          alt="image"
        />
      </div>
    </div>
  );
}
