import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

  closeResult = '';
  @ViewChild('content', { read: TemplateRef }) content: TemplateRef<any>;
  @Input() title?: string;
  @Input() text?: string;
  @Output() actionClicked = new EventEmitter();


  constructor(private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    modalConfig.modalDialogClass = 'info-modal';
    modalConfig.centered = true;
  }

  ngOnInit(): void {

  }

  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.actionClicked.emit('clicked');
      this.modalService.dismissAll();
    });
  }

}
