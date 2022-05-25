import db from '@/firebase';
import {collection, getDocs} from 'firebase/firestore';
import {AppDispatch} from '../store';
import {moviesSliceActions} from './movies.reducer';

//TODO: попробовать вытаскивать отдельно
// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
export const getMovies = () => {
  let recommends: Array<{id: string}> = [];
  let newDisneys: Array<{id: string}> = [];
  let originals: Array<{id: string}> = [];
  let trending: Array<{id: string}> = [];
  return (dispatch: AppDispatch) => {
    return getDocs(collection(db, 'movies'))
      .then((result) => {
        result.forEach((doc) => {
          switch (doc.data().type) {
            case 'recommend':
              recommends = [...recommends, {id: doc.id, ...doc.data()}];
              break;
            case 'new': {
              newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}];
              break;
            }
            case 'original': {
              originals = [...originals, {id: doc.id, ...doc.data()}];
              break;
            }
            case 'trending': {
              trending = [...trending, {id: doc.id, ...doc.data()}];
              break;
            }
          }
        });
        dispatch(
          moviesSliceActions.setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          }),
        );
      })

      .catch((error) => error.message);
  };
};
