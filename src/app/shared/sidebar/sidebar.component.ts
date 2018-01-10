import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() items:any[];
    currentSelected:any = null;
    
    constructor() { }

    ngOnInit() {
        if(this.items.length >0){
            this.currentSelected = this.items[0];
        }
    }
    onClick(item:any){
        this.currentSelected = item;
        if(this.currentSelected.open != null && this.currentSelected.open != undefined){
            this.currentSelected.open = !this.currentSelected.open;
        }
    }

}
