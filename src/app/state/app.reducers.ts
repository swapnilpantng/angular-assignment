import { createReducer, on } from '@ngrx/store';
import { showReducer } from '../features/shows/state/show.reducers';
import { SetUserAction, UpdateAllShows } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
    user: "",
    showState: {
        shows: []
    }

};

export const appReducer = createReducer(
    initialState,
  on(SetUserAction, (state, payload) => {
      return {
          user: payload.userName,
          showState: {...state.showState}
      }
  }),
  on(UpdateAllShows, (state, payload) => {
    return {
        user: state.user,
        showState: {
            shows: [...payload.allShows]
        }
    }
})
);
