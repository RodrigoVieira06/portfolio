import { Injectable } from '@angular/core';
import { IContact } from '../../types/contact.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import emailjs from 'emailjs-com';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private staticFormsURL: string = environment.staticForms.url
  private staticFormsSubmit: string = environment.staticForms.submit
  private emailjsParams = {
    serviceId: environment.emailjsParams.serviceId,
    templateId: environment.emailjsParams.templateId,
    userId: environment.emailjsParams.userId,
    defaultMessage: `
      Obrigado por entrar em contato! Eu recebi sua mensagem e vou responder o mais rápido possível.

      Enquanto isso, sinta-se à vontade para explorar mais sobre o meu trabalho e projetos.

      Obrigado novamente pela sua mensagem.
    `
  }

  constructor(private http: HttpClient) { }

  public sendEmail(form: IContact): Observable<IContact> {
    const staticFormsSubmitEndpoint = this.staticFormsURL + this.staticFormsSubmit;
    return this.http.post<IContact>(staticFormsSubmitEndpoint, form);
  }

  public sendResponse(contact: IContact) {
    const templateParams = {
      from_name: contact.subject,
      to_name: contact.name,
      message: this.emailjsParams.defaultMessage,
      reply_to: contact.email
    };

    console.log(this.emailjsParams.serviceId);
    console.log(this.emailjsParams.templateId);
    console.log(templateParams);
    console.log(this.emailjsParams.userId);

    emailjs.send(
      this.emailjsParams.serviceId,
      this.emailjsParams.templateId,
      templateParams,
      this.emailjsParams.userId
    );
  }
}
