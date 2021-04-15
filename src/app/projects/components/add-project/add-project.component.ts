import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Input() team!: Team;
  aux: number = 0;
  project: Project ={
    name: '',
    team: undefined,
    taskLists: []
  }
  constructor(public activeModal: NgbActiveModal, private projectService: ProjectService) { }

  ngOnInit(): void {
    console.log(this.team);
  }

  addProject() {
    console.log(this.project.name)
    if (this.project.name !== ''){
      console.log(`he llegadoooooo`)
      this.aux = this.team.id!;
      const team = { id : this.aux, name: "asdsa", users : [], projects : []};
      this.projectService.addProjectToTeam(this.project,team, 50);
    }
  }

}
