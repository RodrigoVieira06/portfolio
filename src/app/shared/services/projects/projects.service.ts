import { Injectable } from '@angular/core';
import { IProject } from '../../types/project.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) { }

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>('assets/data/projects.json');
  }
}
