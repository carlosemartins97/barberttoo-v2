import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { formatDateForAgendamentos } from 'src/app/shared/utils/functions/date';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss']
})
export class CardAgendamentoComponent implements OnInit {

  @Input() agendamento: Agendamento;
  @Output() deleteClicked = new EventEmitter();
  @ViewChild(AlertModalComponent) modal: AlertModalComponent;
  dataAgendamento: string;
  loading: boolean = false;

  faTrash = faTrash;


  constructor(private agendamentoService: AgendamentoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.formatAgendamentoDate();
  }

  formatAgendamentoDate() {
    this.dataAgendamento = formatDateForAgendamentos(this.agendamento.dt_Agendamento);
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

  openAlertModal() {
    this.modal.open();
  }

}
