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
  noEncontrado : boolean = false;

  constructor(private teamService: TeamServiceService, private userService: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.getUserByUsername(this.user.username).subscribe(
      res => {
        this.user.id = res.id;
        this.teamService.addUserToTeam(this.user, this.team).subscribe(
          res => {
            this.noEncontrado = false;
            this.team.users.push(this.user);
            this.activeModal.close();
          }
        );
      },
      error => this.noEncontrado = true
    )
  }

}
