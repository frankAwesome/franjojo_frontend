import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialogclient',
  templateUrl: './dialogclient.component.html',
  styleUrls: ['./dialogclient.component.scss']
})
export class DialogClientComponent {
  @Output() closeDialog = new EventEmitter<void>();
}
