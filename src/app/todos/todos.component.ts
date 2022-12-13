import { Component } from '@angular/core';

export const EMPTY_TODO = { todo: '', completed: false }

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos = [
    { todo: 'Todo 1', completed: true },
    { todo: 'Todo 2', completed: false },
  ]

  addTodo() {
    this.todos.push(EMPTY_TODO)
  }
}
