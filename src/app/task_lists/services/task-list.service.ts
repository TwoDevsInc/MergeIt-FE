import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskList } from '../interfaces/task_list.interface';
import { Project } from '../../projects/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  API_TASK_LISTS_URL = "taskList";

  constructor(private http: HttpClient) { }

  getTaskLists() : Observable<TaskList[]>{
    return this.http.get<TaskList[]>(`${this.API_TASK_LISTS_URL}/all`);
  }

  getTaskListById(id: number) : Observable<TaskList> {
    return this.http.get<TaskList>(`${this.API_TASK_LISTS_URL}/${id}`);
  }

  getTaskListsByProject(project : Project) : Observable<TaskList[]>{
    return this.http.get<TaskList[]>(`${this.API_TASK_LISTS_URL}/taskListsByProject/${project.id}`);
  }

  addTaskListToProject(taskList : TaskList, project : Project): Observable<TaskList>{
    return this.http.post<TaskList>(`${this.API_TASK_LISTS_URL}/addTaskListTo/${project.id}`,taskList);
  }

  updateTaskList(taskList : TaskList): Observable<TaskList>{
    return this.http.put<TaskList>(`${this.API_TASK_LISTS_URL}/update`,taskList)
  }

  deleteTaskList(id : number): Observable<void>{
    return this.http.delete<void>(`${this.API_TASK_LISTS_URL}/delete/${id}`);
  }
}
