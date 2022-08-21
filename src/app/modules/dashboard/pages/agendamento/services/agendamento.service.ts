import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  getAgendamentos(id: string) {
    return this.http.get<Agendamento[]>(`${environment.baseUrl}/agendamento/cliente/${id}`).toPromise();
  }
}
