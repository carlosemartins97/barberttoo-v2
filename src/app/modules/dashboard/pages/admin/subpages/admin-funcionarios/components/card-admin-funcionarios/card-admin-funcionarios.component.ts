import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faAngleDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { FuncionariosService } from 'src/app/modules/dashboard/pages/funcionarios/services/funcionarios.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-card-admin-funcionarios',
  templateUrl: './card-admin-funcionarios.component.html',
  styleUrls: ['./card-admin-funcionarios.component.scss']
})
export class CardAdminFuncionariosComponent implements OnInit {

  @Input() funcionario: AtendenteInterface;
  @Output() deleteClicked = new EventEmitter();
  @ViewChild(AlertModalComponent) modal: AlertModalComponent;

  isCollapsed: boolean = true;

  faAngleDown = faAngleDown;
  faTrash = faTrash;

  constructor(private funcionariosService: FuncionariosService, private modalConfig: NgbModal) { }

  ngOnInit(): void {
  }

  openAlertModal() {
    this.modal.open();
  }

  onDelete() {
    this.funcionariosService.deleteAtendente(this.funcionario.id).then(res => {
      this.modalConfig.dismissAll();
      this.deleteClicked.emit('clicked');
    }).catch(error => {
      console.log(error);
      alert('Não foi possível completar sua requisição. Tente novamente mais tarde!')
    })
  }

}
