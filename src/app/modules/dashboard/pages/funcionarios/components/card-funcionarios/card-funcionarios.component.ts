import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-funcionarios',
  templateUrl: './card-funcionarios.component.html',
  styleUrls: ['./card-funcionarios.component.scss']
})
export class CardFuncionariosComponent implements OnInit {

  @Input() funcionario: any;

  isCollapsed: boolean = true;

  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
