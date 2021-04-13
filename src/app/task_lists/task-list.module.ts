import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskModule } from '../tasks/task.module';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskModule
  ],
  exports:[
    TaskListComponent
  ]
})
export class TaskListModule { }
