import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAbout } from '../../types/about.type';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  public getAboutInformations(): Observable<IAbout[]> {
    return this.http.get<IAbout[]>('assets/data/about.json');
  }
}
