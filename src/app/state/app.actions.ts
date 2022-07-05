import { createAction, props } from "@ngrx/store";
import { IShow } from "../features/shows/interfaces/show.interface";

export const UpdateAllShows = createAction("UpdateAllShows",  props<{allShows: IShow[]}>());
