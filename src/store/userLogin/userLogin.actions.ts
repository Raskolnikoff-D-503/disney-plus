import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from '@/firebase';
import {AppDispatch} from '@/store/store';
import {userLoginActions} from './userLogin.reducer';

/**
 * Экшн на получение данных пользователя
 * @returns имя, электронная почта и ссылка на фото пользователя
 */
export const setUserLoginDetails = () => {
  return (dispatch: AppDispatch) => {
    return signInWithPopup(auth, provider)
      .then((result) =>
        dispatch(
          userLoginActions.setUserLoginDetails({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        ),
      )
      .catch((error) => error.message);
  };
};

export const setSignOutState = () => {};
