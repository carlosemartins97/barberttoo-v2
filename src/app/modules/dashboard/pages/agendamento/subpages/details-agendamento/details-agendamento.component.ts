import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agendamento } from 'src/app/core/models/agendamento.model';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-details-agendamento',
  templateUrl: './details-agendamento.component.html',
  styleUrls: ['./details-agendamento.component.scss']
})
export class DetailsAgendamentoComponent implements OnInit {

  @ViewChild(AlertModalComponent) modal: AlertModalComponent;
  agendamentoId: number;
  agendamento: Agendamento;
  loading: boolean = false;
  loadingPage: boolean = false;

  faArrowLeft = faArrowLeft;

  constructor(private route: ActivatedRoute, private agendamentoService: AgendamentoService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.getAgendamentoDetail();
  }

  getAgendamentoDetail() {
    this.loadingPage = true;
    this.agendamentoId = +this.route.snapshot.params.id;
    this.agendamentoService.getAgendamentoById(this.agendamentoId).then(res => {
      this.agendamento = res;
      this.loadingPage = false;
      console.log(res);
    }).catch(error => {
      console.log(error);
      this.loadingPage = false;
    })
  }

  openAlertModal() {
    this.modal.open();
  }

  onDelete() {
    this.modalService.dismissAll();
    this.loading = true;
    this.agendamentoService.deleteAgendamento(this.agendamento.id).then(res => {
      console.log(res);
      this.router.navigate(['../'], { relativeTo: this.route });
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

}
