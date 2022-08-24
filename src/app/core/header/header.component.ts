import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBagShopping, faBars, faCalendarDays, faHammer, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FuncionariosService } from 'src/app/modules/dashboard/pages/funcionarios/services/funcionarios.service';
import { ClienteService } from '../services/cliente/cliente.service';
import { UserService } from '../services/user/user.service';
import { HeaderItem } from './header.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCalendarDays = faCalendarDays;
  faBagShopping = faBagShopping;
  faUsers = faUsers;
  faBars = faBars;

  isCollapsed = true;

  name: string;
  loading: boolean = false;
  role: string;


  navHeader: HeaderItem[] = [
    { name: 'Agendamento', icon: faCalendarDays, link: 'app/agendamento' },
    { name: 'Serviços', icon: faBagShopping, link: 'app/servicos' },
    { name: 'Funcionários', icon: faUsers, link: 'app/funcionarios' },
  ]

  navHeaderAdmin: HeaderItem[] = [
    { name: 'Administração', icon: faHammer, link: 'app/admin' },
  ]

  constructor(private router: Router, private userService: UserService, private clienteService: ClienteService, private funcionariosService: FuncionariosService) {
    this.role = this.userService.retornaUserRole();
  }

  ngOnInit(): void {
    this.role === 'ROLE_CLIENTE' ? this.fetchClienteData() : this.fetchFuncData();

    this.clienteService.dadosAtualizados.subscribe(res => {
      this.name = res.nm_Cliente;
    })
  }

  logout() {
    this.userService.logout();
  }

  fetchClienteData() {
    this.loading = true;
    const id = this.userService.retornaUserId();
    this.clienteService.getClientById(id).then(res => {
      this.name = res.nm_Cliente;
      this.loading = false;
    }).catch(err => {
      console.log(err);
      this.name = '-'
      this.loading = false;
      id !== '0' && this.userService.logout();
      ;
    })
  }

  fetchFuncData() {
    this.loading = true;
    const id = Number(this.userService.retornaUserId());
    this.funcionariosService.getFuncionarioById(id).then(res => {
      this.name = res.nm_Funcionario;
      this.loading = false;
    }).catch(err => {
      console.log(err);
      this.name = '-'
      this.loading = false;
      ;
    })
  }

}
