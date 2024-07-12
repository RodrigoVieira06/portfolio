import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperience } from '../../types/experience.type';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private http: HttpClient) { }

  public getExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>('assets/data/experiences.json');
  }
}
