import {createSlice} from '@reduxjs/toolkit';
import {MovieCollectionType} from '@/types/types';

const initialState: MovieCollectionType = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const moviesSliceReducer = moviesSlice.reducer;
export const moviesSliceActions = moviesSlice.actions;
