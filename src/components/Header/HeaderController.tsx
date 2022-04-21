import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {auth} from '@/firebase';
import {AppDispatch} from '@/store/store';
import {userLoginActions} from '@/store/userLogin/userLogin.reducer';
import {setUserLoginDetails} from '@/store/userLogin/userLogin.actions';
import {
  selectUserName,
  //   selectUserEmail,
  selectUserPhoto,
} from '@/store/userLogin/userLogin.selectors';
import {Header} from './Header';

export const HeaderController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  //Selectors
  const userName = useSelector(selectUserName);
  //   const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  //Handlers
  const authorizationHandler = () => {
    if (!userName) {
      dispatch(setUserLoginDetails());
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(userLoginActions.setSignOutState());
          navigate('/', {replace: true});
        })
        .catch((err) => alert(err.message));
    }
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
      //   userEmail={userEmail}
      userPhoto={userPhoto}
      handleAuth={authorizationHandler}
    />
  );
};
