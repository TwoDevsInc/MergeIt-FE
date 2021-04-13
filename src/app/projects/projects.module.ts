import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardComponent } from './components/project-board/project-board.component';
import { ProjectListMainComponent } from './components/project-list-main/project-list-main.component';
import { ProjectCardMainComponent } from './components/project-card-main/project-card-main.component';



@NgModule({
  declarations: [
    ProjectBoardComponent,
    ProjectListMainComponent,
    ProjectCardMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ProjectBoardComponent,
    ProjectListMainComponent,
    ProjectCardMainComponent
  ]
})
export class ProjectsModule { }
