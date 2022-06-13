import { createAction, props } from "@ngrx/store";

export type allowedFilters = 'all' | 'acitve' | 'completed';

export const filterTodos = createAction(
  '[Filter] Set Filter',
  props<{ filter: allowedFilters }>()
);
