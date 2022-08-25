import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { FuncionariosService } from '../../../funcionarios/services/funcionarios.service';

@Component({
  selector: 'app-admin-funcionarios',
  templateUrl: './admin-funcionarios.component.html',
  styleUrls: ['./admin-funcionarios.component.scss']
})
export class AdminFuncionariosComponent implements OnInit {

  funcionarios: AtendenteInterface[] = [];
  loading: boolean = false;

  faPlus = faPlus;

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.loading = true;
    this.funcionariosService.getFuncionariosFull().then(res => {
      this.funcionarios = res;
      this.loading = false;
      console.log(res);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
