import {getMovies} from '@/store/movies/movies.actions';
import {selectUserName} from '@/store/userLogin/userLogin.selectors';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Home} from './Home';

export const HomeController = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  useEffect(() => {
    dispatch(getMovies());
  }, [userName]);

  return <Home />;
};
