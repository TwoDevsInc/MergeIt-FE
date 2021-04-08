import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBoardComponent } from './components/project-board/project-board.component';



@NgModule({
  declarations: [
    ProjectBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ProjectBoardComponent
  ]
})
export class ProjectsModule { }
