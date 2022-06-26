import { createAction, props } from "@ngrx/store";
import { IShow } from "../interfaces/show.interface";


export const AddShowAction = createAction("AddShowAction",  props<{show: IShow}>());
export const RemoveShowAction = createAction("RemoveShow", props<{id: number}>());
export const LoadShow = createAction("LoadShow");
export const LoadShowSuccess = createAction("LoadShowSuccess", props<{shows: IShow[]}>());
export const LoadShowFailure = createAction("LoadShowFailure", props<{error: string}>());
