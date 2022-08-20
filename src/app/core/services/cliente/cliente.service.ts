import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  dadosAtualizados = new Subject<Cliente>();

  constructor(private http: HttpClient) { }

  getClientById(id: string) {
    return this.http.get<Cliente>(`${environment.baseUrl}/cliente/${id}`).toPromise();
  }

  updateClient(payload: Cliente) {
    return this.http.put<Cliente>(`${environment.baseUrl}/cliente/update`, payload).toPromise();
  }
}
