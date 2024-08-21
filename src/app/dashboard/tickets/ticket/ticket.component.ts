import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tickets } from './ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() data?:Tickets
  @Output() close = new EventEmitter<any>()
  public setVisible = false

  onVisible(){
    this.setVisible = !this.setVisible
  }

  onClose(){
    this.close.emit()
  }
}
