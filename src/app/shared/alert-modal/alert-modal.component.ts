import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  closeResult = '';
  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any>;
  @Input() modalClass?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() actionText?: string = 'Excluir';
  @Input() color?: string = 'red';
  @Output() actionClicked = new EventEmitter();


  constructor(private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    modalConfig.centered = true;
  }

  ngOnInit(): void {
    this.modalConfig.modalDialogClass = `alert-modal ${this.modalClass}`;
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

  ngOnDestroy() {
    this.modalConfig.modalDialogClass = `alert-modal`;
  }
}
