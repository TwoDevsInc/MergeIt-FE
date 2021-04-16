import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';
import { Team } from '../../teams/interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  API_PROJECTS_URL = "project";

  constructor(private http: HttpClient) { }

  getProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(`${this.API_PROJECTS_URL}/all`);
  }

  getProjectById(id: number) : Observable<Project> {
    return this.http.get<Project>(`${this.API_PROJECTS_URL}/${id}`);
  }

  getProjectsByTeam(team : Team) : Observable<Project[]>{
    return this.http.get<Project[]>(`${this.API_PROJECTS_URL}/projectsByTeam/${team.id}`);
  }

  addProjectToTeam(project : Project, team : Team): Observable<Project>{
    return this.http.post<Project>(`${this.API_PROJECTS_URL}/addProjectTo/${team.id}`,project);
  }

  updateProject(project : Project): Observable<Project>{
    return this.http.put<Project>(`${this.API_PROJECTS_URL}/update`,project)
  }

  deleteProject(id : number): Observable<void>{
    return this.http.delete<void>(`${this.API_PROJECTS_URL}/delete/${id}`);
  }
}
