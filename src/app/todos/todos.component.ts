import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
