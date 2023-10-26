"use client";

import { Pokemon } from "@/lib/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { generateValue, getPokemonColor } from "@/lib/utils";
import { Bookmark, BookmarkCheck } from "lucide-react";
import {
  ReduxState,
  pokemonSlice,
  selectIsPokemonExist,
  useDispatch,
  useSelector,
} from "@/lib/redux";
import { useToast } from "@/components/ui/use-toast";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();

  const isPokemonExist = useSelector((state: ReduxState) =>
    selectIsPokemonExist(pokemon.id)(state)
  );

  const onAddToFavourite = () => {
    dispatch(pokemonSlice.actions.addPokemon(pokemon));
    toast({
      description: `Congratuations! Pokemon ${pokemon.name} added to your favourite list`,
    });
  };

  return (
    <div className="rounded-lg overflow-hidden border-blue-500 border-2">
      <div className="flex flex-col justify-between p-4">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="pokemon-image"
          width={180}
          height={180}
          className="self-center"
        />
        <div className="flex flex-row mt-4 justify-between items-center">
          <div className="flex flex-col gap-1">
            <h4
              className="text-2xl capitalize font-semibold cursor-pointer"
              onClick={() => router.push(`/pokemon/${pokemon.name}`)}
            >
              {pokemon.name}
            </h4>
            <p className="text-sm">#{generateValue(pokemon.order)}</p>
          </div>
          {isPokemonExist ? (
            <BookmarkCheck className="text-blue-500" />
          ) : (
            <Bookmark
              className="text-blue-500 cursor-pointer"
              onClick={onAddToFavourite}
            />
          )}
        </div>
      </div>
      <div className="flex gap-2 flex-row px-4 py-4">
        {pokemon.types.map((item, index) => (
          <Badge
            key={index}
            style={{ backgroundColor: getPokemonColor(item.type.name) }}
            className="capitalize"
          >
            {item.type.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
