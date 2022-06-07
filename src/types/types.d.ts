import {User} from 'firebase/auth';

type Nullable<T> = T | null;

export type UserLoginType = {
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

type MovieType = {
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
};

export type MovieCollectionType = {
  recommend: Nullable<MovieType[]>;
  newDisney: Nullable<MovieType[]>;
  original: Nullable<MovieType[]>;
  trending: Nullable<MovieType[]>;
};
