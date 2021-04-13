export interface Task {
    id? : number;
	name: string;
	description: string;
	createdAt: Date;
	color : string;
	archived : boolean;
}
