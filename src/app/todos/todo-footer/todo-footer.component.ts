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

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select( 'filter' )
      .subscribe( filter => this.currentFilter = filter );
  }

  changeFilter( filter: actions.allowedFilters ) {
    this.store.dispatch( actions.filterTodos({ filter }) )
  }
}
