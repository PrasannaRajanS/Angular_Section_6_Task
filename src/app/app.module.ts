import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './dashboard/tickets/new-ticket/new-ticket.component';
import { TicketComponent } from './dashboard/tickets/ticket/ticket.component';
import { ButtonComponent } from './shared/button/button.component';
import { ControlComponent } from './shared/control/control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerStatusComponent,
    TicketsComponent,
    TrafficComponent,
    DashboardItemComponent,
    NewTicketComponent,
    TicketComponent,
    ButtonComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
