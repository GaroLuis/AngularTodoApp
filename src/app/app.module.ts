import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { Route, RouterModule } from "@angular/router";
import { CdkDrag, CdkDropList } from "@angular/cdk/drag-drop";

const ROUTES: Array<Route> = [
  {path: 'user', component: UserComponent},
  {path: 'todos', component: TodosComponent},
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: '**', redirectTo: '/todos'},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodosComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    CdkDropList,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
