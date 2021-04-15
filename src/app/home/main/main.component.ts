import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { TeamServiceService } from 'src/app/teams/services/team-service.service';
import { User } from 'src/app/users/interfaces/user.interface';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'main-section',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loggedUser!: User;
  teams? : Team[] = [];
  dhd: string = 'd';

  constructor(private teamService: TeamServiceService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(7).subscribe(
      u => {
        this.loggedUser = u;
        this.teamService.getTeamsByUser(u.id!).subscribe(
          r => this.teams = r
        )
      },
      e => console.log(`No se ha posido recuperar el usuario logeado`)
    )



  }

}
