import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModalComponent } from './components/task-modal/task-modal.component';



@NgModule({
  declarations: [
    TaskModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskModalComponent
  ]
})
export class TaskModule { }
