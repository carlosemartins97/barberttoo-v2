import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { AgendamentoService } from '../agendamento/services/agendamento.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService, private userService: UserService) { }

  agendamentos: Agendamento[] = [];
  id: string;

  loading: boolean = false;

  ngOnInit(): void {
    this.id = this.userService.retornaUserId();
    this.getAgendamentosByAtendente();
  }

  getAgendamentosByAtendente() {
    this.loading = true;
    this.agendamentoService.getAgendamentosFuncionario(Number(this.id)).then(res => {
      console.log(res)
      this.agendamentos = res;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
      alert('Não foi possível completar sua requisição! Tente novamente mais tarde.');
    })
  }

}
