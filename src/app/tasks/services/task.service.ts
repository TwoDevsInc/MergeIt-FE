import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskList } from 'src/app/task_lists/interfaces/task_list.interface';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_TASKS_URL = "task";

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(`${this.API_TASKS_URL}/all`);
  }

  getTaskById(id: number) : Observable<Task> {
    return this.http.get<Task>(`${this.API_TASKS_URL}/${id}`);
  }

  getTasksByTaskList(taskList : TaskList) : Observable<Task[]>{
    return this.http.get<Task[]>(`${this.API_TASKS_URL}/tasksByTaskList/${taskList.id}`);
  }

  addTaskToTaskList(task : Task, taskList : TaskList): Observable<Task>{
    return this.http.post<Task>(`${this.API_TASKS_URL}/addTaskTo/${taskList.id}`,task);
  }

  updateTask(taskList : Task): Observable<Task>{
    return this.http.put<Task>(`${this.API_TASKS_URL}/update`,taskList)
  }

  deleteTask(id : number): Observable<void>{
    return this.http.delete<void>(`${this.API_TASKS_URL}/delete/${id}`);
  }
}
