import { Component, OnInit } from '@angular/core';
import { faCalendarPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  constructor() { }

  faTrash = faTrash;
  faCalendarPlus = faCalendarPlus

  ngOnInit(): void {
  }

}
