import { Team } from "src/app/teams/interfaces/team.interface";

export interface User{
    id?: number,
    username : string,
	  email : string,
    name: string,
    surname: string
    teams : Team[]
}

export interface UserTeams{
  id : number;
	username : string;
	email :string;
  name : string;
  surname : string;
  teams : Team[];
}

export interface NewUser{
  username : string;
  password : string;
  email? : string;
  name?: string;
  surname?: string;
}


export interface UserLogin{
  username : string;
  password : string;
}

