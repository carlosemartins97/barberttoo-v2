import { Component, OnInit } from '@angular/core';
import { faCalendarPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { UserService } from 'src/app/core/services/user/user.service';
import { AgendamentoService } from './services/agendamento.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  agendamentos: Agendamento[] = [];
  loading: boolean = false;
  role: string;

  //icons
  faCalendarPlus = faCalendarPlus

  constructor(private agendamentoService: AgendamentoService, private userService: UserService) {
    this.role = this.userService.retornaUserRole();
  }



  ngOnInit(): void {
    this.getAgendamentos();
  }

  getAgendamentos() {
    this.loading = true;
    this.agendamentoService.getAgendamentos(this.userService.retornaUserId()).then(res => {
      this.agendamentos = res;
      console.log(res);
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
