import { Component, OnInit } from '@angular/core';
import { faBagShopping, faBars, faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';
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

  navHeader: HeaderItem[] = [
    {name: 'Agendamento', icon: faCalendarDays, link: '#'},
    {name: 'Serviços', icon: faBagShopping, link: '#'},
    {name: 'Funcionários', icon: faUsers, link: '#'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
