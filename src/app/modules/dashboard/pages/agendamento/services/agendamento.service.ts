import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento, AgendamentoCurto } from 'src/app/core/models/agendamento.model';
import { formatDateAndHour } from 'src/app/shared/utils/functions/date';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  getAgendamentos(id: string) {
    return this.http.get<Agendamento[]>(`${environment.baseUrl}/agendamento/cliente/${id}`).toPromise();
  }

  getAgendamentosFuncionario(id: number) {
    return this.http.get<Agendamento[]>(`${environment.baseUrl}/agendamento/funcionario/${id}`).toPromise();
  }

  getAgendamentoById(id: number) {
    return this.http.get<Agendamento>(`${environment.baseUrl}/agendamento/parcial/${id}`).toPromise();
  }

  createAgendamento(payload: { date: string, funcionario: string, hour: string, servico: string }, id: string) {
    const newPayload: AgendamentoCurto = {
      cliente: Number(id),
      funcionario: Number(payload.funcionario),
      servico: Number(payload.servico),
      dt_Agendamento: formatDateAndHour(payload.hour, payload.date)
    }
    console.log(newPayload);
    return this.http.post<AgendamentoCurto>(`${environment.baseUrl}/agendamento/create`, newPayload).toPromise();
  }

  deleteAgendamento(id: number) {
    return this.http.delete<any>(`${environment.baseUrl}/agendamento/${id}`).toPromise();
  }
}
