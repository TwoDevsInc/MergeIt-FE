import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() comment! : Comment;

}
