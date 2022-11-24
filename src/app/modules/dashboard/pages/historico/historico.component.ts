import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { HistoricoADM, HistoricoFuncionario } from './models/historico.model';
import { HistoricoService } from './services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  loading: boolean = false;

  isCliente: boolean;
  isADM: boolean;
  isFunc: boolean;


  userId: string;
  agendamentosFunc: HistoricoFuncionario[] = [];
  agendamentosCliente: any = [];
  agendamentosADM: HistoricoADM[] = [];

  // form = new FormGroup({

  // })

  constructor(private userService: UserService, private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.isCliente = this.userService.retornaUserRole() === 'ROLE_CLIENTE';
    this.isADM = this.userService.retornaUserRole() === 'ROLE_ADM';
    this.isFunc = this.userService.retornaUserRole() === 'ROLE_ATEND';

    this.userId = this.userService.retornaUserId();
    this.isCliente ? this.getHistoricoByCliente() : this.isFunc ? this.getHistoricoByAtendente() : this.getHistoricoByADM();
  }

  onFilter() {

  }

  getHistoricoByAtendente() {
    this.loading = true;
    this.historicoService.getFuncionarioHistoricById(+this.userId).then(res => {
      console.log(res);
      this.agendamentosFunc = res;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  getHistoricoByCliente() {
    this.loading = true;
    this.historicoService.getClienteHistoricById(+this.userId).then(res => {
      console.log(res);
      this.agendamentosCliente = res;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  getHistoricoByADM() {
    this.loading = true;
    this.historicoService.getHistoricoTotal().then(res => {
      console.log(res);
      this.agendamentosADM = res;
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
