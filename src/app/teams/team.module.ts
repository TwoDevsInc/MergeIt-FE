import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamNavItemMainComponent } from './components/team-nav-item-main/team-nav-item-main.component';
import { NewTeamComponent } from './components/new-team/new-team.component';



@NgModule({
  declarations: [TeamNavItemMainComponent, NewTeamComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewTeamComponent
  ]
})
export class TeamModule { }
