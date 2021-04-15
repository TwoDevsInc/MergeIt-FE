import { Task } from "src/app/tasks/interfaces/task";
import { User } from "src/app/users/interfaces/user.interface";

export interface Comment {
    id? : number;
	task? : Task;
	user? : User;
	text : string;
	createdAt? : Date;
}
