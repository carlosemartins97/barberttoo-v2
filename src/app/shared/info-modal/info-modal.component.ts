import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
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


  constructor(private modalService: NgbModal, private modalConfig: NgbModalConfig) {
    modalConfig.modalDialogClass = 'info-modal';
    modalConfig.centered = true;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }



  open() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log(reason)
    });
  }

}
