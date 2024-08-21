import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<{title : string; text :string}>()

  @ViewChild ('form') form ?:ElementRef<HTMLFormElement>

  onSumbit(title:string,tickettext:string){
    this.add.emit({title:title,text:tickettext})
    this.form?.nativeElement.reset()
  }
}
