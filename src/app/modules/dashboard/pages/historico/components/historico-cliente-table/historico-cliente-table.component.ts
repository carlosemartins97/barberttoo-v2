import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-cliente-table',
  templateUrl: './historico-cliente-table.component.html',
  styleUrls: ['./historico-cliente-table.component.scss']
})
export class HistoricoClienteTableComponent implements OnInit {
  @Input() agendamentos: any[];

  constructor() { }

  ngOnInit(): void {
    this.agendamentos.sort((a, b) => {
      //@ts-ignore
      return new Date(b.dt_Realizado) - new Date(a.dt_Realizado);
    })
  }


}
