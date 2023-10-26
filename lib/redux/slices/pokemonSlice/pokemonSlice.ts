import { Pokemon } from '@/lib/type'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: PokemonSliceState = {
  pokemons: [],
}

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemons.push(action.payload)
    },
  },
})

export interface PokemonSliceState {
  pokemons: Pokemon[]
}