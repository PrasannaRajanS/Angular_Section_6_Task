import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent {

  currentStatus = 'online';

  constructor(){

  }

  ngOnInit(){
    console.log('On Init');
  }
}
