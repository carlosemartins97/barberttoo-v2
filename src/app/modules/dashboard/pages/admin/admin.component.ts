import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminLinks = [
    { name: 'Criar/editar serviços', path: 'servicos' },
    { name: 'Criar/excluir funcionários', path: 'funcionarios' },
    { name: 'Ir para Dashboard', path: '../dashboard' },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
