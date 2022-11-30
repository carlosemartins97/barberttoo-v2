import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';

@Component({
  selector: 'app-agendamento-manual',
  templateUrl: './agendamento-manual.component.html',
  styleUrls: ['./agendamento-manual.component.scss']
})
export class AgendamentoManualComponent implements OnInit {

  submitted: boolean = false;

  form = new FormGroup({
    cpf: new FormControl('', [Validators.required])
  })

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  getForm() {
    return this.form.controls;
  }

  onSubmit() {
    // this.clienteService.getClienteByCPF(this.form.controls.cpf.value).then(res => {
    //   console.log(res);
    // })
  }

}
