import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    CommentComponent
  ]
})
export class CommentModule { }
