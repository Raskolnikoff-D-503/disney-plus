import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {useNavigate} from 'react-router-dom';
import {AppDispatch} from '@/store/store';
import {setUserLoginDetails} from '@/store/userLogin/userLogin.actions';
import {
  selectUserName,
  //   selectUserEmail,
  selectUserPhoto,
} from '@/store/userLogin/userLogin.selectors';
import {Header} from './Header';

export const HeaderController = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  //Selectors
  const userName = useSelector(selectUserName);
  //   const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  //Handlers
  const authorizationHandler = () => {
    dispatch(setUserLoginDetails());
  };

  return (
    <Header
      userName={userName}
      //   userEmail={userEmail}
      userPhoto={userPhoto}
      handleAuth={authorizationHandler}
    />
  );
};
