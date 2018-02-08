import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddGadget]'
})
export class AddGadgetDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
