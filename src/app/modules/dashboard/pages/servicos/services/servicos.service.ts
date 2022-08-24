import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/core/models/service.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<CrudService[]>(`${environment.baseUrl}/servico`).toPromise();
  }

  getServiceById(id: number) {
    return this.http.get<CrudService>(`${environment.baseUrl}/servico/${id}`).toPromise();
  }

  updateService(servico: CrudService) {
    return this.http.put<any>(`${environment.baseUrl}/servico`, servico).toPromise();
  }

  createService(payload: CrudService) {
    return this.http.post<CrudService>(`${environment.baseUrl}/servico/create`, payload).toPromise();
  }

  deleteService(id: number) {
    return this.http.delete<any>(`${environment.baseUrl}/servico/${id}`).toPromise();
  }
}
