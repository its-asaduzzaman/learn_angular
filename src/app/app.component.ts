import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  serverId = 10;
  serverStatus = 'offline';
  username ='';
  serverName = '';
  serverCreationStatus = "No server was created";
  serverCreated = false;
  showSecret = false;
   log : number[]= [];
  constructor(){
    this.serverStatus =Math.random()> .50 ? 'online':'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
    this.serverCreated = true;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
