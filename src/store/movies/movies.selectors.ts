import {RootState} from '@/store/store';

export const selectRecommend = (state: RootState) => state.movies.recommend;
export const selectNewDisney = (state: RootState) => state.movies.newDisney;
export const selectOriginal = (state: RootState) => state.movies.original;
export const selectTrending = (state: RootState) => state.movies.trending;
