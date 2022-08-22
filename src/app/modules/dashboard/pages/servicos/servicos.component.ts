import { Component, OnInit } from '@angular/core';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/core/models/service.model';
import { ServicosService } from './services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  servicos: CrudService[];
  loading: boolean = false;

  //icons
  faScissors = faScissors;

  constructor(private servicosService: ServicosService) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos() {
    this.servicosService.getServices().then(res => {
      this.servicos = res;
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  }

}
