import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: ToDo;
  @Input() i!: number;

  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter;
  @Output() todoCheckbox: EventEmitter<ToDo> = new EventEmitter;


  constructor() { }

  onClick(todo: ToDo) {
    this.todoDelete.emit(todo);
    console.log("onClick method has been triggered...");
  }

  onDone(todo: ToDo) {
    console.log("Marking as done...");
    this.todoCheckbox.emit(todo);
  }
}
