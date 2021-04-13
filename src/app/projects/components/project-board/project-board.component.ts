import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';
import { TaskListService } from 'src/app/task_lists/services/task-list.service';

@Component({
  selector: 'project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.css']
})
export class ProjectBoardComponent implements OnInit {

  constructor(private projectService : ProjectService, 
              private activatedRoute: ActivatedRoute,
              private taskListService : TaskListService) { }

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

  



}
