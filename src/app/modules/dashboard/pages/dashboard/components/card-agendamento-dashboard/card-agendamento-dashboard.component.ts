import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { formatDateForAgendamentos } from 'src/app/shared/utils/functions/date';
import { AgendamentoService } from '../../../agendamento/services/agendamento.service';
import { HistoricoModel } from '../../../historico/models/historico.model';
import { HistoricoService } from '../../../historico/services/historico.service';

@Component({
  selector: 'app-card-agendamento-dashboard',
  templateUrl: './card-agendamento-dashboard.component.html',
  styleUrls: ['./card-agendamento-dashboard.component.scss']
})
export class CardAgendamentoDashboardComponent implements OnInit {

  @Input() agendamento: Agendamento;
  @Output() deleteClicked = new EventEmitter();
  @ViewChild(AlertModalComponent) modal: AlertModalComponent;

  submitted: boolean = false;
  loading: boolean = false;
  dataAgendamento: string;
  faCheck = faCheck;

  form = new FormGroup({
    ds_Pagamento: new FormControl('', [Validators.required]),
    newPrice: new FormControl(''),
    price: new FormControl(''),
  })

  constructor(private modalService: NgbModal, private agendamentoService: AgendamentoService, private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.dataAgendamento = formatDateForAgendamentos(this.agendamento.dt_Agendamento);
    this.form.get('price')?.setValue(this.agendamento.servico.vl_preco);
  }

  openAlertModal() {
    this.modal.open();
  }

  getForm() {
    return this.form.controls
  }

  onDelete() {
    this.submitted = true;
    if (this.form.valid) {
      this.modalService.dismissAll();
      this.loading = true;
      const index = this.agendamento.dt_Agendamento.indexOf('T');
      const agendamentoFormatted = `${this.agendamento.dt_Agendamento.substring(0, index)} ${this.agendamento.dt_Agendamento.substring(index + 1)}`;

      const historico: HistoricoModel = {
        dt_Realizado: agendamentoFormatted,
        vl_Pago: this.form.get('newPrice')?.value ? this.form.get('price')?.value : this.agendamento.servico.vl_preco,
        ds_Pagamento: this.form.get('ds_Pagamento')?.value,
        cliente: this.agendamento.cliente.id,
        funcionario: this.agendamento.funcionario.id,
        servico: this.agendamento.servico.id,
      }

      this.historicoService.createHistoric(historico).then(response => {
        this.agendamentoService.deleteAgendamento(this.agendamento.id).then(res => {
          this.deleteClicked.emit('refresh');
          this.loading = false;
        }).catch(error => {
          console.log(error);
          this.loading = false;
        })
      }).catch(err => {
        alert('Erro ao concluir agendamento.')
        console.log(err)
        this.loading = false;
      })
    }
  }


}
