import { Task } from '../../tasks/interfaces/task';

export interface TaskList{
    id? : number;
    name : string;
    createAt? : Date;
    archived : boolean;
    tasks? : Task[];
}