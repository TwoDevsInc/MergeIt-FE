import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { CommentModule } from '../comments/comment.module';

@NgModule({
  declarations: [
    TaskModalComponent
  ],
  imports: [
    CommonModule,
    CommentModule
  ],
  exports: [
    TaskModalComponent
  ]
})
export class TaskModule { }
