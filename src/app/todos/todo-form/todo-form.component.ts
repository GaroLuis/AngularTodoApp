import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  todoForm = this.formBuilder.group({
    todo: ['', Validators.compose([Validators.maxLength(10), Validators.required])],
    completed: [false]
  })

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
