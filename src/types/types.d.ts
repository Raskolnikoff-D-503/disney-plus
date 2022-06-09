import {User} from 'firebase/auth';

export type Nullable<T> = T | null;

export type CollectionType = 'trending' | 'original' | 'recommend' | 'new';

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
  /**
   * Ссылка на фоновую картинку
   */
  backgroundImg: string;
  /**
   * Ссылка на картинку карточки
   */
  cardImg: string;
  /**
   * Описание
   */
  description: string;
  /**
   * Подзаголовок
   */
  subTitle: string;
  /**
   * Заголовок
   */
  title: string;
  /**
   * Ссылка на картинку заголовка
   */
  titleImg: string;
  /**
   * Тип фильма
   */
  type: CollectionType;
};

export type MovieType = MovieDto & {id: string};

export type MovieCollectionType = {
  recommend: Nullable<MovieType[]>;
  newDisney: Nullable<MovieType[]>;
  original: Nullable<MovieType[]>;
  trending: Nullable<MovieType[]>;
};
