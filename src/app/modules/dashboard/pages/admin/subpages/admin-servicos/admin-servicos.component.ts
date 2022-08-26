import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from 'src/app/core/models/service.model';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { ServicosService } from '../../../servicos/services/servicos.service';

@Component({
  selector: 'app-admin-servicos',
  templateUrl: './admin-servicos.component.html',
  styleUrls: ['./admin-servicos.component.scss']
})
export class AdminServicosComponent implements OnInit {

  @ViewChild(AlertModalComponent) createModal: AlertModalComponent;
  loading: boolean = false;
  loadingCreate: boolean = false;
  servicos: CrudService[] = [];
  submitted: boolean = false;

  faPlus = faPlus;

  form: FormGroup = new FormGroup({
    nm_servico: new FormControl('', [Validators.required]),
    ds_servico: new FormControl('', [Validators.required]),
    vl_preco: new FormControl('', [Validators.required]),
  })

  constructor(private servicosService: ServicosService, private modalConfig: NgbModal) { }

  ngOnInit(): void {
    this.getServicos();
  }

  openCreateModal() {
    this.createModal.open();
  }

  getServicos() {
    this.loading = true;
    this.servicosService.getServices().then(res => {
      this.servicos = res;
      console.log(res);
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.loadingCreate = true;
      this.servicosService.createService(this.form.value).then(res => {
        this.loadingCreate = false;
        this.modalConfig.dismissAll();
        this.getServicos();
      }).catch(error => {
        console.log(error);
        this.loadingCreate = false;
        alert('Erro! Não foi possível completar sua requisição. Tente novamente mais tarde')
        this.modalConfig.dismissAll();
      })
    }
  }

}
