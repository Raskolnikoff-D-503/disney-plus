import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from '@/store/store';
import {
  setAuthState,
  setSignOutState,
  setUserLoginDetails,
  selectIsAuthenticated,
  selectUserName,
  selectUserPhoto,
} from '@/store/userLogin';
import {HeaderLayout} from './HeaderLayout';

export const HeaderController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  //Selectors
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  //Handlers
  const signInHandler = () => {
    dispatch(setUserLoginDetails());
  };

  const signOutHandler = () => {
    dispatch(setSignOutState());
    navigate('/', {replace: true});
  };

  //Effects
  useEffect(() => {
    dispatch(setAuthState());
    return isAuthenticated
      ? navigate('/home', {replace: true})
      : navigate('/', {replace: true});
  }, [userName, isAuthenticated]);

  return (
    <HeaderLayout
      userName={userName}
      userPhoto={userPhoto}
      handleAuth={signInHandler}
      handleSignOut={signOutHandler}
    />
  );
};
