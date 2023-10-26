// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { ReduxState } from '@/lib/redux'
import { Pokemon } from '@/lib/type';

export const selectPokemons = (state: ReduxState) => state.pokemon.pokemons;

export const selectIsPokemonExist = (pokemonId: number) =>
  createSelector(selectPokemons, (pokemons) =>
    pokemons.some((pokemon: Pokemon) => pokemon.id === pokemonId)
  );
