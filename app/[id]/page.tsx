import { BASE_URL } from "@/utils/constant";
import Header from "../_components/Header";
import Image from "next/image";

async function getPokemonDetail(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemonDetail(params.id);

  return (
    <div className="container max-w-7xl mx-auto p-10">
      <Header
        title="Pokedéx"
        description="Pokémon data you'll ever need in one place"
      />

      <div className="flex flex-row max-w-4xl items-center mx-auto mt-32 justify-between shadow-md p-6 rounded">
        <div className="flex flex-col">
        <p className="text-7xl font-thin pb-2">
            #{pokemon.order}
          </p>
          <p className="text-md font-light pb-2">
            {pokemon.types[0].type.name}
          </p>
          <p className="text-5xl font-semibold">{pokemon.name}</p>
        </div>
        <Image
          src={pokemon.sprites.other.home.front_default}
          height={500}
          width={500}
          alt="image"
        />
      </div>
    </div>
  );
}
