import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  constructor(private api:ApiService, private deleteRouter:Router){}
  @Input() deleteUser:any

  @Output() Oncancel = new EventEmitter()
  @Output() onDelete = new EventEmitter()
  cancel(){
    this.Oncancel.emit()
  }
  deleteFromChild(){
    this.onDelete.emit()
  }
}
