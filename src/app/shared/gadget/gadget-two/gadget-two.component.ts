import { Component, Input } from '@angular/core';
import { GadgetComponent } from './../gadget.component';

@Component({
  selector: 'app-gadget-two',
  templateUrl: './gadget-two.component.html',
  styleUrls: ['./gadget-two.component.scss']
})
export class GadgetTwoComponent extends GadgetComponent {

    constructor() { 
        super();
    }

    ngOnInit() {
    }

}

