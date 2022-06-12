import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild( 'physicalInput' ) txtPhysicalInput: ElementRef;
  public chkCompleted: FormControl;
  public txtInput: FormControl;
  public editing: boolean = false;

  constructor() { 
    this.todo = new Todo('');
    this.txtPhysicalInput = new ElementRef('');
    this.txtInput = new FormControl( this.todo.text, Validators.required );
    this.chkCompleted = new FormControl( this.todo.completed );
  }

  ngOnInit(): void {
  }

  editTodo() {
    this.editing = true;

    setTimeout(() => {
      this.txtPhysicalInput.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;
  }
}
