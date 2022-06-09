import React from 'react';
import {useSelector} from 'react-redux';
import {selectOriginal} from '@/store/movies';
import {MoviesLayout} from '@/components';

export const Originals = () => {
  //Variables
  const title = `Originals`;

  //Selectors
  const movies = useSelector(selectOriginal);

  return <MoviesLayout title={title} data={movies} />;
};
