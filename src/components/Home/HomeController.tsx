import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@/store/store';
import {getMovies} from '@/store/movies';
import {selectUserName} from '@/store/userLogin';
import {HomeLayout} from './HomeLayout';

export const HomeController = () => {
  const dispatch = useDispatch<AppDispatch>();

  //Selectors
  const userName = useSelector(selectUserName);

  //Effects
  useEffect(() => {
    if (userName) {
      dispatch(getMovies());
    }
  }, [userName]);

  return <HomeLayout />;
};
