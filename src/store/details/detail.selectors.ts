import {RootState} from '@/store/store';

export const selectMovieDetailsById = (state: RootState) => state.details.data;
