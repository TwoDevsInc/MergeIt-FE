import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../interfaces/task_list.interface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  taskList : TaskList = {
    id : 1,
    name : "Lista tarea",
    createAt : new Date(),
    archived : false
  };

}
