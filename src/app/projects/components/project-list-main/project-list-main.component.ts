import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { UserService } from 'src/app/users/services/user.service';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'project-list-main',
  templateUrl: './project-list-main.component.html',
  styleUrls: ['./project-list-main.component.css']
})
export class ProjectListMainComponent implements OnInit {
  @Input() team!: Team;
  projects? : Project[];
  count: number = 0;
  constructor(private projectService : ProjectService, private userService: UserService) { }

  ngOnInit(): void {
    this.projects = [];
    this.projectService.getProjectsByTeam(this.team).subscribe(
      p => this.projects = p
    )
    this.userService.getUserByTeam(this.team.id!).subscribe(
      u => this.count = u.length
    )
  }

}
