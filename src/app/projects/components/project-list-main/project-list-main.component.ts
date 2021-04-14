import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'project-list-main',
  templateUrl: './project-list-main.component.html',
  styleUrls: ['./project-list-main.component.css']
})
export class ProjectListMainComponent implements OnInit {
  board?: Project
  team?: Team
  constructor() { }

  ngOnInit(): void {
    this.board = {
      id: 1,
      name: "FrontEnd",
    }

  }

}
