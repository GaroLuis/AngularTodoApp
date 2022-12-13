import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { EMPTY_TODO } from "../todos.component";

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  todoForm = this.formBuilder.group({
    todo: ['', Validators.compose([Validators.maxLength(10), Validators.required])],
    completed: [false]
  })

  @Input() todoInput = { ...EMPTY_TODO }

  ngOnInit(): void {
    this.todoForm.setValue(this.todoInput)
  }

  get todo() {
    return this.todoForm.get('todo')?.value?.trim()
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      console.log('Invalid');
      return
    }

    console.log(this.todoForm.value);
  }

  constructor(private formBuilder: FormBuilder) {
  }
}
