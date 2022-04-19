import {UserLoginType} from '@/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState: UserLoginType = {
  name: '',
  email: '',
  photo: '',
};

const userLoginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
