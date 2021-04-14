import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from 'src/app/comments/interfaces/comment';
import { CommentService } from 'src/app/comments/services/comment.service';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private taskService : TaskService,
              private commentService : CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsByTask(this.task).subscribe(
      comments => this.comments = comments
    )
  }

  @Input() task! : Task;
  comments : Comment[] = [];
}
