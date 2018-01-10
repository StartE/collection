import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    currentSelected:any = null;
    items=[
      {name:'Dashboard',isChildren:false,open:false,url:'/web/dashboard',children:[]},
      {name:'Chart',isChildren:false,open:false,url:null,children:[
        {name:'D3-Chart',isChildren:true,url:'/web/d3-chart'},
        {name:'Chart.js',isChildren:true,url:'/web/chart-js'}]
      }
    ]
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
