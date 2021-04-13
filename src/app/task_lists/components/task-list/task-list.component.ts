import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../interfaces/task_list.interface';
import { Task } from '../../../tasks/interfaces/task';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TaskModalComponent } from '../../../tasks/components/task-modal/task-modal.component';
import { TaskService } from '../../../tasks/services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  modalOptions:NgbModalOptions;

  constructor( private modalService: NgbModal,
               private taskService : TaskService) { 
    this.modalOptions = {
      size: 'lg',
      backdrop:true,
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.taskService.getTasksByTaskList(this.taskList).subscribe(
      tasks => this.taskList.tasks = tasks
    )
  }

  @Input() taskList : TaskList = {
    name : "",
    archived : false
  };

  openTaskModal(task : Task) {
    const modalRef = this.modalService.open(TaskModalComponent, this.modalOptions);
    modalRef.componentInstance.task = task;
  }

}
