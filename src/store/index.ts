import {combineReducers} from '@reduxjs/toolkit';
import {userLoginReducer} from './userLogin/userLogin.reducer';
import {moviesSliceReducer} from './movies/movies.reducer';
import {movieDetailsReducer} from './details/details.reducer';

const reducers = {
  user: userLoginReducer,
  movies: moviesSliceReducer,
  details: movieDetailsReducer,
};

export const rootReducer = combineReducers(reducers);
