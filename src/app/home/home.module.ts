import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from '../projects/projects.module';
import { ProjectListMainComponent } from '../projects/components/project-list-main/project-list-main.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { TeamModule } from '../teams/team.module';



@NgModule({
  declarations: [IndexComponent,
    MainComponent],
  imports: [
    CommonModule,
    ProjectsModule,
    TeamModule
  ]
})
export class HomeModule { }
