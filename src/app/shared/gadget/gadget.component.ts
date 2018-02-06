import { Component, OnInit, Input, HostListener, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.scss'],
  host:{
      '(dragstart)':`onDragStart($event)`,
      '(dragover)':'onDragOver($event)',
      '(dragenter)':'onDragEnter($event)',
      '(drop)':'onDrop($event)'
  }
})
export class GadgetComponent implements OnInit {

    @Input() id:number;
    @Input() width:any;

    constructor() { }

    ngOnInit() {
    }

    @HostListener('dragstart',['$event'])
    onDragStart(event: DragEvent){
        console.log(event)
        event.preventDefault();
    }

    @HostListener('dragover',['$event'])
    onDragOver(event: DragEvent){
        console.log(event)
        event.preventDefault();
    }

    @HostListener('dragenter',['$event'])
    onDragEnter(event: DragEvent){
        console.log(event)
        event.preventDefault();
    }

    @HostListener('drop',['$event'])
    onDrop(event: DragEvent){
        console.log(event)
        event.preventDefault();
    }

}
