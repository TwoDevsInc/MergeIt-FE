import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
  }

  @Input() comment! : Comment;
  @Output() deleted = new EventEmitter<Comment>();
  editingComment : boolean = false;

  editComment(){
    this.commentService.updateComment(this.comment).subscribe(
      commentUpdated => this.editingComment = false
    )
  }

  deleteComment(){
    this.commentService.deleteComment(this.comment.id!).subscribe(
      () => this.deleted.emit()
    )
  }

}
