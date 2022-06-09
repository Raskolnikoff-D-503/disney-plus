import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '@/store/store';
import {
  movieDetailsActions,
  getMovieDetailsbyId,
  selectMovieDetailsById,
} from '@/store/details';
import {DetailLayout} from './DetailLayout';

export const DetailController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {id} = useParams();

  //Selectors
  const data = useSelector(selectMovieDetailsById);

  //Effects
  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsbyId(id));
    }
    return () => {
      dispatch(movieDetailsActions.clearMovieDetails());
    };
  }, [id]);

  return <DetailLayout data={data} />;
};
