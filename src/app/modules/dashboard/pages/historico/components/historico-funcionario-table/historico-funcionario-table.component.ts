import { Component, Input, OnInit } from '@angular/core';
import { HistoricoFuncionario } from '../../models/historico.model';

@Component({
  selector: 'app-historico-funcionario-table',
  templateUrl: './historico-funcionario-table.component.html',
  styleUrls: ['./historico-funcionario-table.component.scss']
})
export class HistoricoFuncionarioTableComponent implements OnInit {

  @Input() agendamentos: HistoricoFuncionario[];

  constructor() { }

  ngOnInit(): void {
    this.agendamentos.sort((a, b) => {
      //@ts-ignore
      return new Date(b.dt_Realizado) - new Date(a.dt_Realizado);
    })
  }

}


