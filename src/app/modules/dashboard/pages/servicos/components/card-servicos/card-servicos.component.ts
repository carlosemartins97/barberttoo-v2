import { Component, Input, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/core/models/service.model';

@Component({
  selector: 'app-card-servicos',
  templateUrl: './card-servicos.component.html',
  styleUrls: ['./card-servicos.component.scss']
})
export class CardServicosComponent implements OnInit {

  @Input() servico: CrudService;

  isCollapsed = true;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
