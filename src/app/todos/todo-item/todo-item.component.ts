// Angular
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// NgRx
import { Store} from '@ngrx/store';
// Redux
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';
// Models
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('');
  @ViewChild( 'physicalInput' ) txtPhysicalInput: ElementRef = new ElementRef('');;
  public chkCompleted: FormControl;
  public txtInput: FormControl;
  public editing: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { 
    this.txtInput = new FormControl( this.todo.text, Validators.required );
    this.chkCompleted = new FormControl( this.todo.completed );
  }

  ngOnInit(): void {
    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch( actions.statusToggle({ id: this.todo.id }) )
    });
  }

  editTodo() {
    this.editing = true;
    this.txtInput.setValue( this.todo.text );

    setTimeout(() => {
      this.txtPhysicalInput.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;

    if ( this.txtInput.invalid ) {
      return;
    }

    if ( this.txtInput.value === this.todo.text ) {
      return;
    }

    this.store.dispatch( actions.editTodo({
      id: this.todo.id,
      text: this.txtInput.value
    }))
  }

  deleteTodo() {
    this.store.dispatch( actions.deleteTodo({ id: this.todo.id }) )
  }
}
