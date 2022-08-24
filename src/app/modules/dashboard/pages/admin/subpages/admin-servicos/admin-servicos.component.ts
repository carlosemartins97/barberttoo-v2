import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/core/models/service.model';
import { ServicosService } from '../../../servicos/services/servicos.service';

@Component({
  selector: 'app-admin-servicos',
  templateUrl: './admin-servicos.component.html',
  styleUrls: ['./admin-servicos.component.scss']
})
export class AdminServicosComponent implements OnInit {

  loading: boolean = false;
  servicos: CrudService[] = [];

  faPen = faPen;
  faTrash = faTrash;

  constructor(private servicosService: ServicosService) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos() {
    this.loading = true;
    this.servicosService.getServices().then(res => {
      this.servicos = res;
      console.log(res);
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
