import { Task } from "src/app/tasks/interfaces/task";

export interface File {
    task : Task;
	name : string;
	path : string;
	type : string;
}
