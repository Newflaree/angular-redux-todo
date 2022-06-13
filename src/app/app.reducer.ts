import { ActionReducerMap } from "@ngrx/store";
// Redux
import { allowedFilters } from "./filter/filter.actions";
import { todoReducer } from "./todos/todo.reducer";
// Models
import { Todo } from "./todos/models/todo.model";
import {filterReducer} from "./filter/filter.reducer";

export interface AppState {
  todos: Todo[],
  filter: allowedFilters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
