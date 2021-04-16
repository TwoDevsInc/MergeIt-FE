import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { TeamServiceService } from 'src/app/teams/services/team-service.service';
import { AddUserComponent } from 'src/app/users/components/add-user/add-user.component';
import { User } from 'src/app/users/interfaces/user.interface';
import { UserService } from 'src/app/users/services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { NewTeamComponent } from '../../teams/components/new-team/new-team.component';

@Component({
  selector: 'main-section',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  modalOptions: NgbModalOptions;
  loggedUser!: User;
  teams?: Team[] = [];
  dhd: string = 'd';

  constructor(private teamService: TeamServiceService, private userService: UserService, private modalService: NgbModal, private authService: AuthService) {
    this.modalOptions = {
      size: 'lg',
      backdrop: true,
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit(): void {

    this.authService.isAuthenticated$.subscribe(
      loggedIn => {
        if (loggedIn) {
          this.loggedUser = this.authService.getAuthUser;
          this.teamService.getTeamsByUser(this.authService.getAuthUser.id!).subscribe(
            r => {
              this.loggedUser.teams = r;
              this.loggedUser.teams.forEach(t => t.projects = []);
            }
          )
          
        }
      }
    )
  }



openAddUserModal(team: Team) {
  const modalRef = this.modalService.open(AddUserComponent, this.modalOptions);
  modalRef.componentInstance.team = team;

  modalRef.result.then((result) => {
    console.log(result);
  }, (reason) => {

  });

}

openAddTeamModal(){
  const modalRef = this.modalService.open(NewTeamComponent, this.modalOptions);
  modalRef.componentInstance.loggedUser = this.loggedUser;

  modalRef.result.then((result) => {
  }, (reason) => {

  });
}

}
