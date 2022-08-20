import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/models/cliente.model';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { InfoModalComponent } from 'src/app/shared/info-modal/info-modal.component';
import { formataCpf } from 'src/app/shared/utils/functions/cpf';
import { CustomValidator } from 'src/app/shared/utils/validators/CustomValidator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild(InfoModalComponent) modal: InfoModalComponent;

  clientId: string;
  userData: Cliente;
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

  constructor(private userService: UserService, private clienteService: ClienteService) {
    this.clientId = this.userService.retornaUserId();
  }

  ngOnInit(): void {
    this.loading = true;
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

  setUserData() {
    this.form.controls.cd_Cpf.setValue(this.userData.cd_Cpf);
    this.form.controls.nm_Cliente.setValue(this.userData.nm_Cliente);
    this.form.controls.cd_Celular.setValue(this.userData.cd_Celular);
    this.form.controls.ds_Email.setValue(this.userData.ds_Email);
    this.form.controls.dt_BirthDate.setValue(this.userData.dt_BirthDate);
  }

  getForm() {
    return this.form.controls;
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

}
