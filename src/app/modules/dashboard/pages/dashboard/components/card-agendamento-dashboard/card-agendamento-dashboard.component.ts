import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { formatDateForAgendamentos } from 'src/app/shared/utils/functions/date';
import { AgendamentoService } from '../../../agendamento/services/agendamento.service';

@Component({
  selector: 'app-card-agendamento-dashboard',
  templateUrl: './card-agendamento-dashboard.component.html',
  styleUrls: ['./card-agendamento-dashboard.component.scss']
})
export class CardAgendamentoDashboardComponent implements OnInit {

  @Input() agendamento: Agendamento;
  @Output() deleteClicked = new EventEmitter();
  @ViewChild(AlertModalComponent) modal: AlertModalComponent;

  loading: boolean = false;

  dataAgendamento: string;

  faCheck = faCheck;

  constructor(private modalService: NgbModal, private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.dataAgendamento = formatDateForAgendamentos(this.agendamento.dt_Agendamento);
  }

  openAlertModal() {
    this.modal.open();
  }

  onDelete() {
    this.modalService.dismissAll();
    this.loading = true;
    this.agendamentoService.deleteAgendamento(this.agendamento.id).then(res => {
      console.log(res);
      this.deleteClicked.emit('refresh');
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }


}
