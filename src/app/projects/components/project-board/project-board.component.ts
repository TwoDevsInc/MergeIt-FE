import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';
import { TaskListService } from 'src/app/task_lists/services/task-list.service';
import { TaskList } from 'src/app/task_lists/interfaces/task_list.interface';
import { TeamServiceService } from 'src/app/teams/services/team-service.service';

@Component({
  selector: 'project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.css']
})
export class ProjectBoardComponent implements OnInit {

  constructor(private projectService : ProjectService, 
              private activatedRoute: ActivatedRoute,
              private taskListService : TaskListService,
              private teamService : TeamServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.projectService.getProjectById(id))
    )
    .subscribe(
      project => {
        this.project = project;
        this.taskListService.getTaskListsByProject(project).subscribe(
          taskLists => this.project.taskLists = taskLists
        );
      }
    )
    
  }

  project : Project = {
    id : 0,
    name : "",
    team : undefined,
    taskLists : [],
  };

  newTaskList: TaskList = {
    name : "",
    archived : false
  }

  editingProjectName : boolean = false;

  editProject(){
    
    this.projectService.updateProject(this.project).subscribe(
      teamUpdated => this.editingProjectName = false
    )
  }
  
  addTaskList(){
    this.taskListService.addTaskListToProject(this.newTaskList,this.project).subscribe(
      taskList => this.project.taskLists?.push(taskList),
      error => console.log(error)
    )
    this.resetForm();
  }

  editTaskList(){

    
  }

  deleteTaskList(taskList: TaskList): void {
    this.project.taskLists = this.project.taskLists?.filter(t => t !== taskList);
  }

  resetForm(){
    this.newTaskList = {
      name : "",
      archived : false
    }
  }


}
