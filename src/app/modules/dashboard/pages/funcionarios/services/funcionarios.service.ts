import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  getFuncionarios() {

    return this.http.get<AtendenteInterface[]>(`${environment.baseUrl}/funcionario/lista`).toPromise();
  }
}
