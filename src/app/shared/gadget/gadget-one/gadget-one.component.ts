import { Component, Input } from '@angular/core';
import { GadgetComponent } from './../gadget.component';

@Component({
  selector: 'app-gadget-one',
  templateUrl: './gadget-one.component.html',
  styleUrls: ['./gadget-one.component.scss']
})
export class GadgetOneComponent  extends GadgetComponent {

    constructor() { 
        super();
    }

    ngOnInit() {
    }

}
