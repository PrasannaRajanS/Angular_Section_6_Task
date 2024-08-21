import { Component } from '@angular/core';
import { Tickets } from './ticket/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
tickets:Tickets[] = []

  onAdd(ticketData:{title:string;text:string}){
    const ticket:Tickets = {
      title:ticketData.title,
      request:ticketData.text,
      id:Math.random().toString(),
      status : 'open'
    }
    this.tickets.push(ticket)
  }

  onCloseTickets(id:string){
    this.tickets  = this.tickets.map((ticket)=>{
      if(ticket.id === id ){
        return{...ticket,status:'close'}
      }
      return ticket
    })
  }
}
