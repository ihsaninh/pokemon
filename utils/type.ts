export type Pokemon = {
  id: string;
  name: string;
  order: number;
  types: PokemonTypes[];
};

type PokemonTypes = {
  slot: number;
  type: PokemonTypeDetail;
};

type PokemonTypeDetail = {
  name: string;
  url: string;
};