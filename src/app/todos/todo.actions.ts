import { createAction, props } from "@ngrx/store";

export const cleanTodos = createAction(
  '[TODO] Clean Todos'
);

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ text: string }>()
);

export const statusToggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] Edit Todo',
  props<{ id: number, text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle all Todo status',
  props<{ completed: boolean }>()
);

