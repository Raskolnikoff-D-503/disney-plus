import {createSlice} from '@reduxjs/toolkit';
import {Nullable, MovieType} from '@/types';

type initialStateType = {
  data: Nullable<MovieType>;
};

const initialState: initialStateType = {
  data: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setMovieDetails: (state, action) => {
      state.data = action.payload.data;
    },
    clearMovieDetails: () => {
      return initialState;
    },
  },
});

export const movieDetailsReducer = detailsSlice.reducer;
export const movieDetailsActions = detailsSlice.actions;
