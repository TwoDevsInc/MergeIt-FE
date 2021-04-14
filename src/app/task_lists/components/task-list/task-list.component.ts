import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskList } from '../../interfaces/task_list.interface';
import { Task } from '../../../tasks/interfaces/task';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TaskModalComponent } from '../../../tasks/components/task-modal/task-modal.component';
import { TaskService } from '../../../tasks/services/task.service';
import { TaskListService } from '../../services/task-list.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  modalOptions:NgbModalOptions;

  constructor( private modalService: NgbModal,
               private taskService : TaskService,
               private taskListService : TaskListService) { 
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

  @Input() taskList! : TaskList;
  @Output() deleted = new EventEmitter<void>();
  editingTaskList : boolean = false;

  newTask : Task = {
    name : "",
    archived : false
  };

  openTaskModal(task : Task) {
    const modalRef = this.modalService.open(TaskModalComponent, this.modalOptions);
    modalRef.componentInstance.task = task;
  }

  addTask(){
    this.taskService.addTaskToTaskList(this.newTask,this.taskList).subscribe(
      task => this.taskList.tasks!.push(task)
    )
    this.resetForm();
  }

  deleteTaskList(){
    this.taskListService.deleteTaskList(this.taskList.id!).subscribe(
      () =>  this.deleted.emit()
    )
  }

  editTaskList(){
    this.editingTaskList = false;
  }


  resetForm(){
    this.newTask = {
      name : "",
      archived : false
    };
  }
}
