import { configureStore } from '@reduxjs/toolkit'
import Favoritos from './Favoritos'

export default configureStore({
  reducer: {
    Favoritos: Favoritos,
  },
})