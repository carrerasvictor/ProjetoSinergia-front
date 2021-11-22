import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() message: string
  @Input() tipo: string = 'success'

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.modal.hide()
  }

}
