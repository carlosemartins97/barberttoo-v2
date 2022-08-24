import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from 'src/app/core/models/service.model';
import { ServicosService } from 'src/app/modules/dashboard/pages/servicos/services/servicos.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-card-admin-servicos',
  templateUrl: './card-admin-servicos.component.html',
  styleUrls: ['./card-admin-servicos.component.scss']
})
export class CardAdminServicosComponent implements OnInit {

  @Input() servico: CrudService;
  @Output() deletedClicked = new EventEmitter();
  @ViewChild('delete') alertModal: AlertModalComponent;
  @ViewChild('edit') editModal: AlertModalComponent;

  faPen = faPen;
  faTrash = faTrash;

  form: FormGroup = new FormGroup({
    nm_servico: new FormControl('', [Validators.required]),
    ds_servico: new FormControl('', [Validators.required]),
    vl_preco: new FormControl('', [Validators.required]),
  })

  constructor(private modalConfig: NgbModal, private servicosService: ServicosService) { }

  ngOnInit(): void {
  }

  openAlertModal() {
    this.alertModal.open();
  }

  openEditModal() {
    this.form.controls.nm_servico.setValue(this.servico.nm_servico);
    this.form.controls.ds_servico.setValue(this.servico.ds_servico);
    this.form.controls.vl_preco.setValue(this.servico.vl_preco);
    this.editModal.open();
  }

  onDelete() {
    this.servicosService.deleteService(this.servico.id).then(res => {
      console.log(res);
      this.deletedClicked.emit('deleted');
      this.modalConfig.dismissAll();
    }).catch(error => {
      console.log(error);
      alert('falha ao excluir serviço! Tente novamente mais tarde.');
      this.modalConfig.dismissAll();
    })
  }

  onUpdate() {
    if (this.form.valid) {
      console.log({ ...this.form.value, id: this.servico.id });
      this.servicosService.updateService({ ...this.form.value, id: this.servico.id }).then(res => {
        console.log(res);
        this.deletedClicked.emit('edited');
        this.modalConfig.dismissAll();
      }).catch(error => {
        console.log(error);
        alert('falha ao editar serviço! Tente novamente mais tarde.');
        this.modalConfig.dismissAll();
      })
    }
  }

}
