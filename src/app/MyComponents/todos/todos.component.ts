import { Component } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: ToDo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is title1',
        desc: 'This is Description',
        active: true
      },
      {
        sno: 2,
        title: 'This is title2',
        desc: 'This is Description',
        active: true
      },
      {
        sno: 3,
        title: 'This is title3',
        desc: 'This is Description',
        active: true
      }
    ];
  }

  deleteTodo(todo:ToDo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  addTodo(todo:ToDo){
    console.log(todo);
    this.todos.push(todo);
  }
}
