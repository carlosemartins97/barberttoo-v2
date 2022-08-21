import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { formatDateForAgendamentos } from 'src/app/shared/utils/functions/date';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss']
})
export class CardAgendamentoComponent implements OnInit {

  @Input() agendamento: Agendamento;

  faTrash = faTrash;

  dataAgendamento: string;

  constructor() { }

  ngOnInit(): void {
    this.formatAgendamentoDate();
  }

  formatAgendamentoDate() {
    this.dataAgendamento = formatDateForAgendamentos(this.agendamento.dt_Agendamento);
  }

}
