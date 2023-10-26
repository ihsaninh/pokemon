import { Badge } from "@/components/ui/badge";
import { getPokemonDetail } from "@/lib/apiClient";
import { Pokemon } from "@/lib/type";
import { getPokemonColor } from "@/lib/utils";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import clsx from "clsx";
import { miltonian } from "@/lib/fonts";

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const pokemon: Pokemon = await getPokemonDetail(params.id);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col m-6">
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="pokemon-image"
          width={400}
          height={400}
        />
        <h1 className={clsx(
          "text-7xl text-center font-bold",
          miltonian.className
        )}>{pokemon.name}</h1>
      </div>
      <div>
        <div className="flex flex-col m-6">
          <div className="grid grid-cols-3 mt-6">
            <p className="font-medium">
              Height:{" "}
              <span className="font-light">{(pokemon.height * 0.1).toFixed(1)} m</span>
            </p>
            <p className="font-medium col-span-2">
              Weight:{" "}
              <span className="font-light">{(pokemon.weight / 10).toFixed(1)} kg</span>
            </p>
          </div>
          <div className="pt-4">
            <p className="font-medium">
              Abilities:{" "}
              {pokemon.abilities.map((a, i) => (
                <span
                  key={i}
                  className="font-light pl-2 text-blue-500 underline capitalize"
                >
                  {a.ability.name}
                  {i !== pokemon.abilities.length - 1 ? "," : ""}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-4">
            <p className="font-medium">Type:</p>
            <div className="flex gap-2 flex-row py-4">
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
          <div className="mt-4">
            <p className="font-medium capitalize text-lg pb-4">
              {pokemon.name}&apos;s Stats
            </p>
            {pokemon.stats.map((item, index) => (
              <div className="grid grid-cols-3 my-4" key={index}>
                <p className="font-medium text-sm capitalize">
                  {item.stat.name}
                </p>
                <Progress
                  className="w-full col-span-2"
                  value={item.base_stat}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
