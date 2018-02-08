import { Component, OnInit, Input, Output, HostListener, ViewContainerRef,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.scss'],
  host:{
      '(dragstart)':`onDragStart($event)`,
      '(dragenter)':'onDragEnter($event)',
      '(dragover)':'onDragOver($event)',
      '(drop)':'onDrop($event)',
  }
})
export class GadgetComponent implements OnInit {

    @Input() id:number;
    @Input() name:string;
    @Input() data:any;
    @Output() onDragStartGadget:EventEmitter<number> = new EventEmitter<number>();
    @Output() onDragOverGadget:EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    @HostListener('dragstart',['$event'])
    onDragStart(event: DragEvent){
        this.onDragStartGadget.emit(this.id);
    }

    @HostListener('dragover',['$event'])
    onDragOver(event: DragEvent){
        event.preventDefault();
        this.onDragOverGadget.emit(this.id);
    }

}
