import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from '@/firebase';
import {AppDispatch} from '@/store/store';
import {userLoginActions} from './userLogin.reducer';

/**
 * Экшн для отслеживания идентификатора пользователя
 * @returns объект с данными пользователя
 */

export const setAuthState = () => {
  return (dispatch: AppDispatch) => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          userLoginActions.setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }),
        );
      }
      dispatch(
        userLoginActions.setAuthenticationStatus({
          isAuthenticated: Boolean(user),
        }),
      );
    });
  };
};

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

/**
 * Экшн для выхода пользователя из своего аккаунта
 * @returns
 */
export const setSignOutState = () => {
  return (dispatch: AppDispatch) => {
    return auth
      .signOut()
      .then(() => {
        dispatch(userLoginActions.setSignOutState());
      })
      .catch((err) => alert(err.message));
  };
};
