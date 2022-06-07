import {RootState} from '@/store/store';

/**
 * Селектор для получения списка фильмов категории Recommend
 * @param state RootState
 * @returns список фильмов категории Recommend
 */

export const selectRecommend = (state: RootState) => state.movies.recommend;

/**
 * Селектор для получения списка фильмов категории New to Disney+
 * @param state RootState
 * @returns список фильмов категории New to Disney+
 */

export const selectNewDisney = (state: RootState) => state.movies.newDisney;

/**
 * Селектор для получения списка фильмов категории Originals
 * @param state RootState
 * @returns список фильмов категории Originals
 */

export const selectOriginal = (state: RootState) => state.movies.original;

/**
 * Селектор для получения списка фильмов категории Trending
 * @param state RootState
 * @returns список фильмов категории Trending
 */

export const selectTrending = (state: RootState) => state.movies.trending;
