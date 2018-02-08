import { Component, OnInit, Input} from '@angular/core';
import { GadgetMessageService } from './../../../services/gadget-message.service';

@Component({
  selector: 'app-gadget-container',
  templateUrl: './gadget-container.component.html',
  styleUrls: ['./gadget-container.component.scss']
})
export class GadgetContainerComponent implements OnInit {

    constructor(protected gadgetMessageService:GadgetMessageService) { }

    ngOnInit() {
    }

    @Input() widthType:any;
    @Input() id:number;
    showToolbar:boolean = false;

    closeGadget(){
        this.gadgetMessageService.announceGadgetClose(this.id);
    }
}
