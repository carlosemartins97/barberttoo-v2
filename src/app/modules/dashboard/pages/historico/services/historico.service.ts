import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { environment } from 'src/environments/environment';
import { HistoricoFuncionario, HistoricoModel } from '../models/historico.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private http: HttpClient, private userService: UserService) { }

  createHistoric(agendamento: HistoricoModel) {
    return this.http.post<HistoricoModel>(`${environment.baseUrl}/historico/create`, agendamento).toPromise();
  }

  getClienteHistoricById(id: number) {
    return this.http.get<HistoricoModel>(`${environment.baseUrl}/historico/cliente/${id}`).toPromise();
  }

  getFuncionarioHistoricById(id: number) {
    return this.http.get<HistoricoFuncionario[]>(`${environment.baseUrl}/historico/funcionario/${id}`).toPromise();
  }

  getHistoricoMesAtual() {
    const id = this.userService.retornaUserId();
    const mesAtual = new Date().getMonth() + 1;
    const anoAtual = new Date().getFullYear();
    return this.http.get<HistoricoModel[]>(`${environment.baseUrl}/historico/funcionario/data/0/${mesAtual}/${anoAtual}/id=${id}`).toPromise();
  }

  getHistoricoByDate(day: number = 0, month: number = 0, year: number = new Date().getFullYear()) {
    const id = this.userService.retornaUserId();
    return this.http.get<HistoricoModel[]>(`${environment.baseUrl}/historico/funcionario/data/${day}/${month}/${year}/id=${id}`).toPromise();
  }
}
