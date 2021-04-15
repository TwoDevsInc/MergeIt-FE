import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'team-nav-item-main',
  templateUrl: './team-nav-item-main.component.html',
  styleUrls: ['./team-nav-item-main.component.css']
})
export class TeamNavItemMainComponent implements OnInit {
  @Input() team!: Team
  constructor() { }

  ngOnInit(): void {
  }

}
