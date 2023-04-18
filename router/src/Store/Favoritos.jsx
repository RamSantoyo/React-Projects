import { createSlice } from '@reduxjs/toolkit'

export const Favoritos = createSlice({
  name: 'Favoritos',
  initialState: {
    value: [],
  },
  reducers: {
    addFavorito: (state, action) => {
        state.value.push(action.payload)
    },
    removeFavorito: (state, action) => {
        state.value = state.value.filter(item => item !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavorito, removeFavorito } = Favoritos.actions

export default Favoritos.reducer