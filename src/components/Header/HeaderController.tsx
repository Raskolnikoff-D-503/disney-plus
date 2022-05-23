import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {auth} from '@/firebase';
import {AppDispatch} from '@/store/store';
import {userLoginActions} from '@/store/userLogin/userLogin.reducer';
import {
  setSignOutState,
  setUserLoginDetails,
} from '@/store/userLogin/userLogin.actions';
import {
  selectUserName,
  selectUserPhoto,
} from '@/store/userLogin/userLogin.selectors';
import {Header} from './Header';

export const HeaderController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  //Selectors
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

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
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          userLoginActions.setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }),
        );
        navigate('/home', {replace: true});
      }
      if (!user) {
        navigate('/', {replace: true});
      }
    });
  }, [userName]);

  return (
    <Header
      userName={userName}
      userPhoto={userPhoto}
      handleAuth={signInHandler}
      handleSignOut={signOutHandler}
    />
  );
};
