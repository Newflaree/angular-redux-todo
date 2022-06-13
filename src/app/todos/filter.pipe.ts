import { Pipe, PipeTransform } from '@angular/core';
import { allowedFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filter: allowedFilters ): Todo[] {
    switch( filter ) {
      case 'completed':
        return todos.filter( todo => todo.completed );

      case 'acitve':
        return todos.filter( todo => !todo.completed );

      default:
        return todos;
    }
  }
}
