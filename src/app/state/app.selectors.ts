import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";






export const appStateProvider = createFeatureSelector<AppState>('root');
export const appStateSelector = createSelector(appStateProvider,(appState) => appState);