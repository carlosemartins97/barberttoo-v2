import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { formatCep } from 'src/app/shared/utils/functions/cep';
import { unformatCpf } from 'src/app/shared/utils/functions/cpf';
import { formatPhone } from 'src/app/shared/utils/functions/phone';
import { CustomValidator } from 'src/app/shared/utils/validators/CustomValidator';
import { FuncionariosService } from '../../../funcionarios/services/funcionarios.service';

@Component({
  selector: 'app-admin-funcionarios',
  templateUrl: './admin-funcionarios.component.html',
  styleUrls: ['./admin-funcionarios.component.scss']
})
export class AdminFuncionariosComponent implements OnInit {

  @ViewChild(AlertModalComponent) modal: AlertModalComponent;
  funcionarios: AtendenteInterface[] = [];
  loading: boolean = false;
  submitted: boolean = false;
  todayDate: any;

  faPlus = faPlus;

  funcForm: FormGroup = new FormGroup({
    nm_Funcionario: new FormControl('', [Validators.required, CustomValidator.validateFullName]),
    cd_Cpf: new FormControl('', [CustomValidator.ValidaCpf]),
    cd_Celular: new FormControl('', [Validators.required, Validators.minLength(11), CustomValidator.validatePhone]),
    dt_BirthDate: new FormControl('', [Validators.required]),
    ds_Email: new FormControl('', [Validators.required, Validators.email]),
    ds_Endereco: new FormControl('', [Validators.required]),
    ds_Cidade: new FormControl('', [Validators.required]),
    sg_Uf: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
    cd_Cep: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    cd_Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    authority: new FormControl('ROLE_ATEND', [Validators.required]),
  })

  constructor(private funcionariosService: FuncionariosService, private clienteService: ClienteService, private modalConfig: NgbModal, private modalService: NgbModalConfig) {
  }

  ngOnInit(): void {
    this.getFuncionarios();
    this.todayDate = new Date().toISOString().split("T")[0];
  }

  getFuncionarios() {
    this.loading = true;
    this.funcionariosService.getFuncionariosFull().then(res => {
      this.funcionarios = res;
      this.loading = false;
      console.log(res);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  openAlertModal() {
    this.modal.open();
  }

  getFuncForm() {
    return this.funcForm.controls;
  }

  fillCep() {
    if (this.funcForm.controls.cd_Cep.value.length === 8) {
      this.clienteService.getEndereco(this.funcForm.controls.cd_Cep.value).then(res => {
        this.funcForm.controls.ds_Endereco.setValue(res.logradouro);
        this.funcForm.controls.ds_Cidade.setValue(res.localidade);
        this.funcForm.controls.sg_Uf.setValue(res.uf);
      }).catch(error => {
        console.log(error);
      })
    }
  }

  onCreate() {
    this.submitted = true;
    if (this.funcForm.valid) {
      const payload = this.funcForm.value;
      payload.cd_Celular = formatPhone(payload.cd_Celular);
      payload.cd_Cpf = unformatCpf(payload.cd_Cpf);
      payload.cd_Cep = formatCep(payload.cd_Cep);
      payload.authority = this.getFuncForm().authority.value;
      this.funcionariosService.createFuncionario(payload).then(res => {
        console.log(res);
        this.modalConfig.dismissAll();
        this.getFuncionarios();
      }).catch(error => {
        console.log(error);
      })
    }
  }

}
