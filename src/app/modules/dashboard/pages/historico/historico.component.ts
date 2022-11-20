import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { HistoricoFuncionario } from './models/historico.model';
import { HistoricoService } from './services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  loading: boolean = false;
  userRole: string;
  userId: string;
  agendamentos: HistoricoFuncionario[] = [];

  // form = new FormGroup({

  // })

  constructor(private userService: UserService, private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.userRole = this.userService.retornaUserRole();
    this.userId = this.userService.retornaUserId();
    this.getHistoricoByAtendente();
  }

  onFilter() {

  }

  getHistoricoByAtendente() {
    this.loading = true;
    this.historicoService.getFuncionarioHistoricById(+this.userId).then(res => {
      console.log(res);
      this.agendamentos = res;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
