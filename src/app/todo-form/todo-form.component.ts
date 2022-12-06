import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todoForm = this.formBuilder.group({
    todo: ['', Validators.compose([Validators.maxLength(10), Validators.required])]
  })

  onSubmit() {
    console.log(this.todoForm.value);
  }

  constructor(private formBuilder: FormBuilder) {
  }
}
