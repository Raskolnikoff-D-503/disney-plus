import db from '@/firebase';
import {doc, getDoc} from 'firebase/firestore';
import {AppDispatch} from '@/store/store';
import {movieDetailsActions} from './details.reducer';

/**
 * Экшн для получения деталей фильма по ID
 * @param id ID фильма
 * @returns Promise с параметрами фильма
 */

export const getMovieDetailsbyId = (id: string) => {
  return (dispatch: AppDispatch) => {
    return getDoc(doc(db, 'movies', id))
      .then((docSnap) => {
        if (docSnap.exists()) {
          dispatch(
            movieDetailsActions.setMovieDetails({
              data: docSnap.data(),
            }),
          );
        } else {
          console.log('No such document');
        }
      })
      .catch((err) => console.log('Error getting document:', err));
  };
};
