import { Component } from '@angular/core';

const EMPTY_TODO = { todo: '', completed: false }

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos = [ EMPTY_TODO ]

  addTodo() {
    this.todos.push(EMPTY_TODO)
  }
}
