import { TaskList } from '../../task_lists/interfaces/task_list.interface';
export interface Task {
    id? : number;
	name: string;
	description?: string;
	createdAt?: Date;
	color? : string;
	archived : boolean;
	taskList?: TaskList;
}
