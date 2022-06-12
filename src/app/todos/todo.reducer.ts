import { Action, ActionReducer, createReducer, on, State } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { createTodo, statusToggle } from "./todo.actions";


export const initialState: Todo[] = [
  new Todo('Save to world'),
  new Todo('Defeat Thanos'),
  new Todo('Buy Iron-Man suit'),
  new Todo('Steal Captain America shield')
];

const _todoReducer = createReducer( 
  initialState,
  on( createTodo, ( state, { text } ) => [ ...state, new Todo( text ) ] ),
  on( statusToggle, ( state, { id } ) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer( state: Todo[], action: Action ): any {
  return _todoReducer( state, action );
}
