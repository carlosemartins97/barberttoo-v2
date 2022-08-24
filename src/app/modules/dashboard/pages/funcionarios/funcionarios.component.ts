import { Component, OnInit } from '@angular/core';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { FuncionariosService } from './services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: AtendenteInterface[] = [];
  loading: boolean = false;

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.loading = true;
    this.funcionariosService.getFuncionarios().then(res => {
      this.funcionarios = res;
      this.loading = false;
      console.log(res)
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
