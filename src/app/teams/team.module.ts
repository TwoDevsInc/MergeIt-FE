import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamNavItemMainComponent } from './components/team-nav-item-main/team-nav-item-main.component';
import { NewTeamComponent } from './components/new-team/new-team.component';
import { HttpClientModule } from'@angular/common/http';
import { NewTeamUserComponent } from './components/new-team-user/new-team-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TeamNavItemMainComponent, NewTeamComponent, NewTeamUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NewTeamComponent,
    TeamNavItemMainComponent
  ]
})
export class TeamModule { }
