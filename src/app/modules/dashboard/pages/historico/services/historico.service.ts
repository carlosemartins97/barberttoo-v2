import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoricoFuncionario, HistoricoModel } from '../models/historico.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient) { }

  createHistoric(agendamento: HistoricoModel) {
    return this.http.post<HistoricoModel>(`${environment.baseUrl}/historico/create`, agendamento).toPromise();
  }

  getClienteHistoricById(id: number) {
    return this.http.get<HistoricoModel>(`${environment.baseUrl}/historico/cliente/${id}`).toPromise();
  }

  getFuncionarioHistoricById(id: number) {
    return this.http.get<HistoricoFuncionario[]>(`${environment.baseUrl}/historico/funcionario/${id}`).toPromise();
  }
}
