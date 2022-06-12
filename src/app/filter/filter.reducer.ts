import { Action, createReducer, on } from "@ngrx/store";
import { allowedFilters, filterTodos } from "./filter.actions";

export const initialState: allowedFilters = 'all';

const _filterReducer = createReducer(
  initialState,
  on( filterTodos, ( state, { filter }: any ) => state )
);

export function filterReducer( state: any, action: Action ) {
  return _filterReducer( state, action );
}
