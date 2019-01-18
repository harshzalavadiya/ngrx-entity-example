import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// If you want to use it in another module then
// import { StoreModule } from '@ngrx/store';
// import { todoReducer } from '../reducers/todo.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forFeature('todo', todoReducer)
  ]
})
export class TodoModule { }
