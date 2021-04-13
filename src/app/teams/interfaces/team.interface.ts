import { User } from "src/app/users/interfaces/user.interface";
import { Project } from '../../projects/interfaces/project.interface';

export interface Team{
    id? : number;
    name : string;
    users : User[];
    projects : Project[];
}