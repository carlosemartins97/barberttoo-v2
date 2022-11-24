import { Component, Input, OnInit } from '@angular/core';
import { HistoricoADM } from '../../models/historico.model';

@Component({
  selector: 'app-historico-adm-table',
  templateUrl: './historico-adm-table.component.html',
  styleUrls: ['./historico-adm-table.component.scss']
})
export class HistoricoAdmTableComponent implements OnInit {

  @Input() agendamentos: HistoricoADM[];

  constructor() { }

  ngOnInit(): void {
    this.agendamentos.sort((a, b) => {
      //@ts-ignore
      return new Date(b.dt_Realizado) - new Date(a.dt_Realizado);
    })
  }

}
