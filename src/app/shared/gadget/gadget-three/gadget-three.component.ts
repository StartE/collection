import { Component, Input } from '@angular/core';
import { GadgetComponent } from './../gadget.component';

@Component({
  selector: 'app-gadget-three',
  templateUrl: './gadget-three.component.html',
  styleUrls: ['./gadget-three.component.scss']
})
export class GadgetThreeComponent  extends GadgetComponent {

    constructor() { 
        super();
    }

    ngOnInit() {
    }

}
