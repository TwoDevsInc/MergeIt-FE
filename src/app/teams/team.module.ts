import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamNavItemMainComponent } from './components/team-nav-item-main/team-nav-item-main.component';
import { NewTeamComponent } from './components/new-team/new-team.component';
import { HttpClientModule } from'@angular/common/http';



@NgModule({
  declarations: [TeamNavItemMainComponent, NewTeamComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NewTeamComponent
  ]
})
export class TeamModule { }
