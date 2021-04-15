import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Comment } from 'src/app/comments/interfaces/comment';
import { CommentService } from 'src/app/comments/services/comment.service';
import { File } from 'src/app/files/interfaces/file';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';
import { FileService } from '../../../files/services/file.service';
import { TeamServiceService } from '../../../teams/services/team-service.service';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private taskService : TaskService,
              private commentService : CommentService,
              private fileService : FileService,
              private authService : AuthService,
              private teamService : TeamServiceService) { }

  ngOnInit(): void {

    this.editingTaskTitle = this.task.name;
    this.commentService.getCommentsByTask(this.task).subscribe(
      comments => this.comments = comments
    )

    this.fileService.getFilesByTask(this.task).subscribe(
      files => this.files = files
    )
  }



  @Input() task! : Task;
  comments : Comment[] = [];
  newComment : Comment = {
    text : ""
  };
  newCommentInputFocus : boolean = false;
  editinTaskName : boolean = false;
  editingTaskTitle : string = "";
  editingDescription : boolean = false;

  files : File[] = [];

  onFocusCommentForm(){
    this.newCommentInputFocus = !this.newCommentInputFocus;
  }
  
  addComment(){
    this.newComment.task = this.task;
    this.newComment.user = this.authService.getAuthUser;

    this.commentService.addCommentToTask(this.newComment, this.task).subscribe(
      comment => this.comments.push(comment)
    )
  }

  editTask(){
    this.task.name = this.editingTaskTitle;
    this.taskService.updateTask(this.task).subscribe(
      taskUpdated => this.editinTaskName = false
    )
  }

  editTaskDescription(){
    this.taskService.updateTask(this.task).subscribe(
      taskUpdated => this.editingDescription = false
    )
  }

  deleteTask(){
    this.taskService.deleteTask(this.task.id!).subscribe(
      () => this.activeModal.close(this.task)
    )
  }

  deletedComment(comment : Comment){
    this.comments = this.comments?.filter(t => t !== comment);
  }

}
