import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskModule } from '../tasks/task.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
    FormsModule
  ],
  exports:[
    TaskListComponent
  ]
})
export class TaskListModule { }
