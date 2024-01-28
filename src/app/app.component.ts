import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-app';
  serverElements = [{type:'server',name:'Testserver',content:'just a test'}];

  onServerAdded(serverData: {serverName: string , serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    console.log('Server Elements:', this.serverElements);
  }
  
  onBlueprintAdded(blueprintData: {serverName: string , serverContent: string}) {
    // console.log('Adding Blueprint:', this.newServerName, this.newServerContent);
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    console.log('Server Elements:', this.serverElements);
  }
  
}
