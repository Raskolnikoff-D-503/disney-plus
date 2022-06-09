import {RootState} from '@/store/store';

/**
 * Селектор для получения деталей фильма по ID
 */

export const selectMovieDetailsById = (state: RootState) => state.details.data;
