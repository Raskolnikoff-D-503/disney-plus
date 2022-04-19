import {combineReducers} from '@reduxjs/toolkit';
import {userLoginReducer} from './userLogin/userLogin.reducer';

const reducers = {
  user: userLoginReducer,
};

export const rootReducer = combineReducers(reducers);
