import { Action, ActionReducer, createReducer, on, State } from "@ngrx/store";
import {Todo} from "./models/todo.model";
import { createTodo } from "./todo.actions";


export const initialState: Todo[] = [];

const _todoReducer = createReducer( 
  initialState,
  on( createTodo, ( state, { text } ) => [ ...state, new Todo( text ) ] )
);

export function todoReducer( state: Todo[], action: Action ): any {
  return _todoReducer( state, action );
}
