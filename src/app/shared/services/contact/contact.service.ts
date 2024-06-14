import { Injectable } from '@angular/core';
import { IContact } from '../../types/contact.type';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseURL: string = environment.staticForms.url;
  private submitAPI: string = environment.staticForms.submit;

  constructor(private http: HttpClient) { }

  public sendEmail(form: IContact) {
    const fullUrl = this.baseURL + this.submitAPI;
    return this.http.post<IContact>(fullUrl, form)
      .subscribe((resultado) => {
        console.log(resultado);
      });
  }
}
