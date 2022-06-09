import {createSlice} from '@reduxjs/toolkit';
import {UserLoginType} from '@/types';

const initialState: UserLoginType = {
  isAuthenticated: true,
  name: '',
  email: '',
  photo: '',
};

const userLoginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticationStatus: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = '';
    },
  },
});

export const userLoginReducer = userLoginSlice.reducer;
export const userLoginActions = userLoginSlice.actions;
