import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@/store/store';
import {getMovies} from '@/store/movies/movies.actions';
import {selectRecommend} from '@/store/movies/movies.selectors';
import {selectUserName} from '@/store/userLogin/userLogin.selectors';
import {Home} from './Home';

export const HomeController = () => {
  const dispatch = useDispatch<AppDispatch>();

  const userName = useSelector(selectUserName);
  const recommends = useSelector(selectRecommend);
  console.log(recommends);

  useEffect(() => {
    if (userName) {
      dispatch(getMovies());
    }
  }, [userName]);

  return <Home />;
};
