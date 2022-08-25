import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  dadosAtualizados = new Subject<AtendenteInterface>();

  constructor(private http: HttpClient) { }

  getFuncionarios() {
    return this.http.get<AtendenteInterface[]>(`${environment.baseUrl}/funcionario/lista`).toPromise();
  }

  getFuncionariosFull() {
    return this.http.get<AtendenteInterface[]>(`${environment.baseUrl}/funcionario`).toPromise();
  }

  getFuncionarioById(id: number) {
    return this.http.get<AtendenteInterface>(`${environment.baseUrl}/funcionario/${id}`).toPromise();
  }

  createFuncionario(payload: AtendenteInterface) {
    return this.http.post<any>(`${environment.baseUrl}/funcionario/create`, payload).toPromise();
  }

  updateAtendente(
    payload: AtendenteInterface) {
    return this.http.put<AtendenteInterface>(`${environment.baseUrl}/funcionario/`, payload).toPromise();
  }

  deleteAtendente(id: number) {
    return this.http.delete<any>(`${environment.baseUrl}/funcionario/${id}`).toPromise();
  }

}
