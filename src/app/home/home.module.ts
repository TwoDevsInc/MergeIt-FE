import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from '../projects/projects.module';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './index/index.component';
import { TeamModule } from '../teams/team.module';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';



@NgModule({
  declarations: [
    IndexComponent,
    MainComponent,
    LoginFormComponent,
    RegisterFormComponent
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
