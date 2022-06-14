import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import gameService from "./gameService";

const initialState = {
  games: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getGamesApi = createAsyncThunk(
  'games/getAll',
  async (_, thunkAPI: any) => {
    try {
      return await gameService.getGames()
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGamesApi.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGamesApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.games = action.payload
      })
      .addCase(getGamesApi.rejected, (state: any, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = gameSlice.actions
export default gameSlice.reducer
