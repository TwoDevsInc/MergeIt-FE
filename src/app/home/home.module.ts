import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from '../projects/projects.module';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { TeamModule } from '../teams/team.module';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
    IndexComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ProjectsModule,
    TeamModule,
    FormsModule,
    UsersModule
  ]
})
export class HomeModule { }
