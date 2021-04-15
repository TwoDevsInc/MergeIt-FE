import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardComponent } from './components/project-board/project-board.component';
import { ProjectListMainComponent } from './components/project-list-main/project-list-main.component';
import { ProjectCardMainComponent } from './components/project-card-main/project-card-main.component';
import { RouterModule } from '@angular/router';
import { TaskListModule } from '../task_lists/task-list.module';
import { TaskListComponent } from '../task_lists/components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { AddProjectComponent } from './components/add-project/add-project.component';



@NgModule({
  declarations: [
    ProjectBoardComponent,
    ProjectListMainComponent,
    ProjectCardMainComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TaskListModule,
    FormsModule
  ],
  exports : [
    ProjectBoardComponent,
    ProjectListMainComponent,
    ProjectCardMainComponent,
    AddProjectComponent
  ]
})
export class ProjectsModule { }
