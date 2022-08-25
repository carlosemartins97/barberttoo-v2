import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';

@Component({
  selector: 'app-card-admin-funcionarios',
  templateUrl: './card-admin-funcionarios.component.html',
  styleUrls: ['./card-admin-funcionarios.component.scss']
})
export class CardAdminFuncionariosComponent implements OnInit {

  @Input() funcionario: AtendenteInterface;

  isCollapsed: boolean = true;

  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
