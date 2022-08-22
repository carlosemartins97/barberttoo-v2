import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-servicos',
  templateUrl: './card-servicos.component.html',
  styleUrls: ['./card-servicos.component.scss']
})
export class CardServicosComponent implements OnInit {

  isCollapsed = true;

  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
