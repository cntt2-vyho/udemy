import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

    constructor() { }

    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    ngOnInit(): void {
    }
    onAddServer(nameInput: HTMLInputElement) {
        

        console.log(this.serverContentInput);
        console.log(nameInput.value);


        this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value })
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.bluePrintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value })
    }
}
