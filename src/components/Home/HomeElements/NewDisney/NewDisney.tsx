import React from 'react';
import {useSelector} from 'react-redux';
import {selectNewDisney} from '@/store/movies';
import {MoviesLayout} from '@/components';

export const NewDisney = () => {
  //Variables
  const title = `New to Disney+`;

  //Selectors
  const movies = useSelector(selectNewDisney);

  return <MoviesLayout title={title} data={movies} />;
};
