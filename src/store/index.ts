import {combineReducers} from '@reduxjs/toolkit';
import {userLoginReducer} from './userLogin/userLogin.reducer';
import {moviesSliceReducer} from './movies/movies.reducer';

const reducers = {
  user: userLoginReducer,
  movies: moviesSliceReducer,
};

export const rootReducer = combineReducers(reducers);
