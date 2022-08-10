import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth, RegisterInterface } from 'src/app/shared/utils/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'https://sistema-barbertoo.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  login(payload: {email: string, password: string}) {
    const newPayload = {
      login: payload.email,
      password: payload.password
    }
    return this.http.post<Auth>(`${this.apiURL}/login`, newPayload);
  }

  register(payload: RegisterInterface) {

    const formattedPhone = '(' + payload.phone.substring(0,2) + ') ' + payload.phone.substring(2,7) + '-' +payload.phone.substring(7,11);
    const formattedCpf = payload.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    console.log(formattedCpf);
    console.log(formattedPhone)

    const newPayload = {
      nm_Cliente: payload.name,
      ds_Email: payload.email,
      cd_Cpf: formattedCpf ,
      dt_BirthDate: payload.date ,
      cd_Celular: formattedPhone ,
      cd_Password: payload.password ,
    }

    return this.http.post<any>(`${this.apiURL}/cliente/create`, newPayload);
  }

}
