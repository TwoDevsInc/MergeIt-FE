import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { TeamServiceService } from 'src/app/teams/services/team-service.service';
import { AddUserComponent } from 'src/app/users/components/add-user/add-user.component';
import { User } from 'src/app/users/interfaces/user.interface';
import { UserService } from 'src/app/users/services/user.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'main-section',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  modalOptions:NgbModalOptions;
  loggedUser!: User;
  teams? : Team[] = [];
  dhd: string = 'd';

  constructor(private teamService: TeamServiceService, private userService: UserService, private modalService: NgbModal, private authService : AuthService) {
    this.modalOptions = {
      size: 'lg',
      backdrop:true,
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.loggedUser = this.authService.getAuthUser;
    this.teamService.getTeamsByUser(this.authService.getAuthUser.id!).subscribe(
      r => {
        this.teams = r;
        this.teams.forEach(t => t.projects = []);
      }
    )
  }

  pene(team: Team){
    console.log(team);
  }

  addUser(team: Team){

  }

  openAddUserModal(team: Team) {
    const modalRef = this.modalService.open(AddUserComponent, this.modalOptions);
    modalRef.componentInstance.team = team;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {

    });

  }

}
