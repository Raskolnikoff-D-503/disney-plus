import React from 'react';
import {useSelector} from 'react-redux';
import {selectRecommend} from '@/store/movies';
import {MoviesLayout} from '@/components';

export const Recommends = () => {
  //Variables
  const title = `Recommended for you`;

  //Selectors
  const movies = useSelector(selectRecommend);

  return <MoviesLayout title={title} data={movies} />;
};
