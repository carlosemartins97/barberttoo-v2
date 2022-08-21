import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBagShopping, faBars, faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';
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


  navHeader: HeaderItem[] = [
    { name: 'Agendamento', icon: faCalendarDays, link: 'dashboard/agendamento' },
    { name: 'Serviços', icon: faBagShopping, link: 'dashboard/servicos' },
    { name: 'Funcionários', icon: faUsers, link: 'dashboard/funcionarios' },
  ]

  constructor(private router: Router, private userService: UserService, private clienteService: ClienteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchClienteData();

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
    })
  }

}
