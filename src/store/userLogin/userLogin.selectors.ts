import {RootState} from '@/store/store';

/**
 * Селектор для получения статуса авторизации
 * @param state RootState
 * @returns значение boolean
 */

export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;

/**
 * Селектор для получения имени пользователя
 * @param state RootState
 * @returns имя пользователя
 */

export const selectUserName = (state: RootState) => state.user.name;

/**
 * Селектор для получения электронной почты пользователя
 * @param state RootState
 * @returns электронная почта пользователя
 */

export const selectUserEmail = (state: RootState) => state.user.email;

/**
 * Селектор для получения фото пользователя
 * @param state RootState
 * @returns ссылка на фото пользователя
 */

export const selectUserPhoto = (state: RootState) => state.user.photo;
