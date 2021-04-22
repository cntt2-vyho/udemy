import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

})
export class AppComponent {
    title: 'booking';

    serverElements = [{
        type: 'server',
        name: 'Testserver',
        content: 'Just a little kewt'
    } ];
   

    onServerAdded(serverData: {serverName: string, serverContent: string}) {

        // console.log(this);
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }

    onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
        console.log(this);
        this.serverElements.push({
            type: 'blueprint',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }


}
