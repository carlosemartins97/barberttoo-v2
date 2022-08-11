import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientById(id: string) {
    return this.http.get<Cliente>(`${environment.baseUrl}/cliente/${id}`).toPromise();
  }

  updateClient() {
    return this.http.get<Cliente>(`${environment.baseUrl}/cliente/update`).toPromise();
  }
}
