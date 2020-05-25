import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-fullscreen',
  templateUrl: './modal-fullscreen.component.html',
  styles: []
})
export class ModalFullScreen implements OnInit {
 

  @ViewChild('content') public content: any;
  modalReference: NgbModalRef;

  pendingOldQueue: boolean
  _pendingOldQueue: any;

  servicePointId: any;
  priorityId: any;

  points: any = [];
  priorities: any = [];
  // isQueueOld = false;
  isAll: boolean = false;

  constructor(
    private modalService: NgbModal,

  ) { }

  ngOnInit() { }


 
  open(isAll: boolean = false) {
    this.isAll = isAll;

    this.modalReference = this.modalService.open(this.content, {
      ariaLabelledBy: 'modal-basic-title',
      keyboard: false,
      backdrop: 'static',
      // size: 'lg',
      // centered: true
    });

    this.modalReference.result.then((result) => { });

  }

  dismiss() {
    this.modalReference.close();
  }



  // setSelected(point: any) {
  //   if (point) {
  //     this.modalReference.close();
  //     this.onSelected.emit(point);
  //   }
  // }

  doFullscreen() {
    console.log('fullscreen');
  }


}
