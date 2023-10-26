import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypeColors {
  [key: string]: string;
}

export const getPokemonColor = (pokemonType: string): string => {
  const typeColors: TypeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const lowercaseType = pokemonType.toLowerCase();

  if (lowercaseType in typeColors) {
    return typeColors[lowercaseType];
  } else {
    return "#A8A77A";
  }
};

export const generateValue = (num: number): string => {
  if (num < 10) {
    return `000${num}`;
  } else if (num < 100) {
    return `00${num}`;
  } else if (num < 1000) {
    return `0${num}`;
  } else {
    return String(num);
  }
};

export function getOffset(urlString: string): string | null {
  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);
  const offset = params.get('offset');
  return offset;
}
