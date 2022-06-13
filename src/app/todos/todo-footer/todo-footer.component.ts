import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  public currentFilter: actions.allowedFilters = 'all';
  public filters: actions.allowedFilters[] = [
    'all',
    'acitve',
    'completed'
  ];
  public pending: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe( ({ filter, todos }) => {
      this.currentFilter = filter;
      this.pending = todos.filter( todo => !todo.completed  ).length;
    })
  }

  changeFilter( filter: actions.allowedFilters ) {
    this.store.dispatch( actions.filterTodos({ filter }) )
  }
}
