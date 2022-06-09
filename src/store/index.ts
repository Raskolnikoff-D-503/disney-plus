import {combineReducers} from '@reduxjs/toolkit';
import {userLoginReducer} from './userLogin';
import {moviesSliceReducer} from './movies';
import {movieDetailsReducer} from './details';

const reducers = {
  user: userLoginReducer,
  movies: moviesSliceReducer,
  details: movieDetailsReducer,
};

export const rootReducer = combineReducers(reducers);
