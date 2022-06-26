import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShowState } from "./show.state";


export const showModuleStateProvider = createFeatureSelector<ShowState>('show');
export const allShowsProvider = (showState: ShowState) => showState.shows;


export const getAllShows = createSelector(showModuleStateProvider, allShowsProvider);
