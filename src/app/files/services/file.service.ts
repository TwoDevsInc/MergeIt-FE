import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/tasks/interfaces/task';
import { HttpClient } from '@angular/common/http';
import { File } from '../interfaces/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  API_FILES_URL = "file";

  constructor(private http: HttpClient) { }

  getFiles() : Observable<File[]>{
    return this.http.get<File[]>(`${this.API_FILES_URL}/all`);
  }

  getFileById(id: number) : Observable<File> {
    return this.http.get<File>(`${this.API_FILES_URL}/${id}`);
  }

  getFilesByTask(task : Task) : Observable<File[]>{
    return this.http.get<File[]>(`${this.API_FILES_URL}/filesByTask/${task.id}`);
  }

  addFileToTask(file : File, task : Task): Observable<File>{
    return this.http.post<File>(`${this.API_FILES_URL}/addFileTo/${task.id}`,file);
  }

  updateFile(task : File): Observable<File>{
    return this.http.put<File>(`${this.API_FILES_URL}/update`,task)
  }

  deleteFile(id : number): Observable<void>{
    return this.http.delete<void>(`${this.API_FILES_URL}/delete/${id}`);
  }
}
