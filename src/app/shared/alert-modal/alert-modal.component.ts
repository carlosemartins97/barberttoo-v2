import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CardAgendamentoComponent } from 'src/app/modules/dashboard/pages/agendamento/components/card-agendamento/card-agendamento.component';

@Component({
  providers: [CardAgendamentoComponent],
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  closeResult = '';
  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any>;
  @Input() title?: string;
  @Input() text?: string;
  @Input() actionText?: string = 'Excluir';
  @Input() color?: string = 'red';
  @Output() actionClicked = new EventEmitter();


  constructor(private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    modalConfig.modalDialogClass = 'alert-modal';
    modalConfig.centered = true;
  }

  ngOnInit(): void {

  }

  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  action() {
    this.actionClicked.emit('clicked');
  }
}
