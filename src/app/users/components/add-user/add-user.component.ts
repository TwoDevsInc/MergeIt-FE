import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { TeamServiceService } from 'src/app/teams/services/team-service.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() team!: Team;
  user: User = {
    id: -1,
    username: '',
    email: '',
    name: '',
    surname: '',
    teams: []
  };
  auxTeam: Team = {
    id: -1,
    name: '',
    users: [],
    projects: []
  }
  auxId: number = -1;
  constructor(private teamService: TeamServiceService, private userService: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    console.log(this.team);
  }

  addUser(){
    this.userService.getUserByUsername(this.user.username).subscribe(
      res => {
        // this.auxId = res.id!;
        // this.user.id = this.auxId;
        // this.auxId = this.team.id!;
        // this.auxTeam.id = this.auxId;
        // console.log(this.user);
        // console.log(this.auxTeam);
        console.log(this.team);
        console.log(res);
        // this.teamService.addUserToTeam(this.user, this.team);
      }
    )
  }

}
