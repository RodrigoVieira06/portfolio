import { Injectable } from '@angular/core';
import { ITechnologyLevels } from '../../types/technology.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private http: HttpClient) { }

  public getTechnologies(): Observable<ITechnologyLevels> {
    return this.http.get<ITechnologyLevels>('assets/data/technologies.json');
  }
}
