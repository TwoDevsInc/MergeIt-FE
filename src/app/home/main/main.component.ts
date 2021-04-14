import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/teams/interfaces/team.interface';
import { TeamServiceService } from 'src/app/teams/services/team-service.service';

@Component({
  selector: 'main-section',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  teams? : Team[];
  dhd: string = 'd';

  constructor(private teamService: TeamServiceService) { }

  ngOnInit(): void {
    this.teams = [];
    this.teamService.getTeamsByUser(7).subscribe(
      r => this.teams = r
    )


  }

}
