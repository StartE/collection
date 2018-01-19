import {NgModule,Directive,ElementRef,OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Directive({
    selector: '[highlightCode]'
})
export class CodeHighlighter implements OnInit {
        
    constructor(public el: ElementRef) {}
    
    ngOnInit() {
        if(window['Prism']) {
            window['Prism'].highlightElement(this.el.nativeElement);
        }
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [CodeHighlighter],
    declarations: [CodeHighlighter]
})
export class CodeHighlighterModule { }