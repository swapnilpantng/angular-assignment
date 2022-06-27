import { createReducer, on } from '@ngrx/store';
import { IShow } from '../interfaces/show.interface';
import { AddShowAction, LoadShow, LoadShowFailure, LoadShowSuccess, RemoveShowAction } from './show.actions';
import { ShowState } from './show.state';

export const showState: ShowState = {
    shows: []
};

export const shows: IShow[] = [];

export const showReducer = createReducer(
    showState,
  on(AddShowAction, (state, payload) => {
      return {
          shows: [...state.shows, payload.show]
      }
  }),
  on(LoadShow, (state) => state),
  on(RemoveShowAction, (state, payload) => { return { shows: state.shows.filter(show => show.id !== payload.id) } }),
  on(LoadShowSuccess, (state, payload) => { console.log('success reducer', payload);return { shows: [...payload.shows] } })
);
