import { TaskList } from "src/app/task_lists/interfaces/task_list.interface";
import { Team } from "src/app/teams/interfaces/team.interface";

export interface Project{
    id? : number;
    name : string;
    team? : Team;
    taskLists? : TaskList[];
}