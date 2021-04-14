import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/tasks/interfaces/task';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API_COMMENTS_URL = "comment";

  constructor(private http: HttpClient) { }

  getComments() : Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.API_COMMENTS_URL}/all`);
  }

  getCommentById(id: number) : Observable<Comment> {
    return this.http.get<Comment>(`${this.API_COMMENTS_URL}/${id}`);
  }

  getCommentsByTask(task : Task) : Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.API_COMMENTS_URL}/commentsByTask/${task.id}`);
  }

  addCommentToTask(comment : Comment, task : Task): Observable<Comment>{
    return this.http.post<Comment>(`${this.API_COMMENTS_URL}/addCommentTo/${task.id}`,comment);
  }

  updateComment(task : Comment): Observable<Comment>{
    return this.http.put<Comment>(`${this.API_COMMENTS_URL}/update`,task)
  }

  deleteComment(id : number): Observable<void>{
    return this.http.delete<void>(`${this.API_COMMENTS_URL}/delete/${id}`);
  }
}
