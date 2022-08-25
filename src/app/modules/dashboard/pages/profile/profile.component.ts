import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/core/models/cliente.model';
import { AtendenteInterface } from 'src/app/core/models/funcionario.model';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { InfoModalComponent } from 'src/app/shared/info-modal/info-modal.component';
import { formataCpf } from 'src/app/shared/utils/functions/cpf';
import { CustomValidator } from 'src/app/shared/utils/validators/CustomValidator';
import { FuncionariosService } from '../funcionarios/services/funcionarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(InfoModalComponent) modal: InfoModalComponent;

  clientId: string;
  role: string;
  userData: Cliente;
  funcData: AtendenteInterface;
  loading: boolean = false;
  loadingUpdate: boolean = false;
  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    nm_Cliente: new FormControl('', [Validators.required, CustomValidator.validateFullName]),
    cd_Cpf: new FormControl(''),
    cd_Celular: new FormControl('', [Validators.required, Validators.minLength(11), CustomValidator.validatePhone]),
    dt_BirthDate: new FormControl('', [Validators.required]),
    ds_Email: new FormControl('', [Validators.required, Validators.email]),
  })

  funcForm: FormGroup = new FormGroup({
    nm_Funcionario: new FormControl('', [Validators.required, CustomValidator.validateFullName]),
    cd_Cpf: new FormControl(''),
    cd_Celular: new FormControl('', [Validators.required, Validators.minLength(11), CustomValidator.validatePhone]),
    dt_BirthDate: new FormControl('', [Validators.required]),
    ds_Email: new FormControl('', [Validators.required, Validators.email]),
    ds_Endereco: new FormControl('', [Validators.required]),
    ds_Cidade: new FormControl('', [Validators.required]),
    sg_Uf: new FormControl('', [Validators.required]),
    cd_Cep: new FormControl('', [Validators.required]),
  })

  faArrowLeft = faArrowLeft;

  constructor(private userService: UserService, private clienteService: ClienteService, private funcionariosService: FuncionariosService) {
    this.clientId = this.userService.retornaUserId();
    this.role = this.userService.retornaUserRole();
  }

  ngOnInit(): void {
    this.loading = true;
    this.role === 'ROLE_CLIENTE' ? this.getClienteInfo() : this.getFuncInfo();
  }

  getClienteInfo() {
    this.clienteService.getClientById(this.clientId).then(res => {
      console.log(res);
      this.userData = res;
      this.setUserData();
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  getFuncInfo() {
    this.funcionariosService.getFuncionarioById(+this.clientId).then(res => {
      console.log(res);
      this.funcData = res;
      this.setFuncData();
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  setUserData() {
    this.form.controls.cd_Cpf.setValue(this.userData.cd_Cpf);
    this.form.controls.nm_Cliente.setValue(this.userData.nm_Cliente);
    this.form.controls.cd_Celular.setValue(this.userData.cd_Celular);
    this.form.controls.ds_Email.setValue(this.userData.ds_Email);
    this.form.controls.dt_BirthDate.setValue(this.userData.dt_BirthDate);
  }

  setFuncData() {
    this.funcForm.controls.cd_Cpf.setValue(this.funcData.cd_Cpf);
    this.funcForm.controls.nm_Funcionario.setValue(this.funcData.nm_Funcionario);
    this.funcForm.controls.cd_Celular.setValue(this.funcData.cd_Celular);
    this.funcForm.controls.ds_Email.setValue(this.funcData.ds_Email);
    this.funcForm.controls.dt_BirthDate.setValue(this.funcData.dt_BirthDate);
    this.funcForm.controls.ds_Endereco.setValue(this.funcData.ds_Endereco);
    this.funcForm.controls.ds_Cidade.setValue(this.funcData.ds_Cidade);
    this.funcForm.controls.sg_Uf.setValue(this.funcData.sg_Uf);
    this.funcForm.controls.cd_Cep.setValue(this.funcData.cd_Cep);
  }

  getForm() {
    return this.form.controls;
  }

  getFuncForm() {
    return this.funcForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.loadingUpdate = true;
      const payload = this.form.value;
      payload.id = this.clientId;
      this.clienteService.updateClient(payload).then(res => {
        console.log(res);
        this.clienteService.dadosAtualizados.next(res);
        this.modal.open();
        this.loadingUpdate = false;
      }).catch(error => {
        console.log(error);
        this.loadingUpdate = false;
      })
    }
  }

  onSubmitFunc() {
    this.submitted = true;
    if (this.funcForm.valid) {
      this.loadingUpdate = true;
      const payload = this.funcForm.value;
      payload.id = this.clientId;
      payload.authority = this.role;
      this.funcionariosService.updateAtendente(payload).then(res => {
        console.log(res);
        this.funcionariosService.dadosAtualizados.next(res);
        this.modal.open();
        this.loadingUpdate = false;
      }).catch(error => {
        console.log(error);
        this.loadingUpdate = false;
      })
    }
  }

}
