import { Component, OnInit } from '@angular/core';
import { faBagShopping, faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  faCalendarDays = faCalendarDays;
  faBagShopping = faBagShopping;
  faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
