import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { CommentModule } from '../comments/comment.module';
import { FormsModule } from '@angular/forms';
import { FileModule } from '../files/file.module';

@NgModule({
  declarations: [
    TaskModalComponent
  ],
  imports: [
    CommonModule,
    CommentModule,
    FileModule,
    FormsModule
  ],
  exports: [
    TaskModalComponent
  ]
})
export class TaskModule { }
