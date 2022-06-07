import React from 'react';
import {useSelector} from 'react-redux';
import {selectTrending} from '@/store/movies/movies.selectors';
import {MoviesLayout} from '@/components';

export const Trending = () => {
  //Variables
  const title = `Originals`;

  //Selectors
  const movies = useSelector(selectTrending);

  return <MoviesLayout title={title} data={movies} />;
};
