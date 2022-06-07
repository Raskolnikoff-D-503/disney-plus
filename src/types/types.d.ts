import {User} from 'firebase/auth';

type Nullable<T> = T | null;

export type UserLoginType = {
  /**
   * Статус авторизации
   */
  isAuthenticated: boolean;
  /**
   * Имя пользователя
   */
  name: Nullable<string>;
  /**
   * Электронная почта пользователя
   */
  email: Nullable<string>;
  /**
   * Ссылка на фото пользователя
   */
  photo: string;
};

export type MovieDto = {
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
};

export type MovieType = MovieDto & {id: string};

export type MovieCollectionType = {
  recommend: Nullable<MovieType[]>;
  newDisney: Nullable<MovieType[]>;
  original: Nullable<MovieType[]>;
  trending: Nullable<MovieType[]>;
};
