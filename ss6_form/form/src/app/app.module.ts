import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTodoComponent } from './practice_application_todo/app-todo/app-todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './exercise_register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTodoComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
