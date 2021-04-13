import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardComponent } from './components/project-board/project-board.component';
import { ProjectListMainComponent } from './components/project-list-main/project-list-main.component';
import { ProjectCardMainComponent } from './components/project-card-main/project-card-main.component';
import { RouterModule } from '@angular/router';
import { TaskListModule } from '../task_lists/task-list.module';
import { TaskListComponent } from '../task_lists/components/task-list/task-list.component';



@NgModule({
  declarations: [
    ProjectBoardComponent,
    ProjectListMainComponent,
    ProjectCardMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TaskListModule
  ],
  exports : [
    ProjectBoardComponent,
    ProjectListMainComponent,
    ProjectCardMainComponent
  ]
})
export class ProjectsModule { }
