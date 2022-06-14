import {configureStore} from "@reduxjs/toolkit";
import authReducer from './services/auth/authSlice'
import gameReducer from './services/games/gameSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    games: gameReducer
  },
})

export type AppDispatch = typeof store.dispatch
export default store
