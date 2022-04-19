type Nullable<T> = T | null;

export type UserLoginType = {
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
