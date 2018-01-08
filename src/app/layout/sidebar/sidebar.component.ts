import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    selectedItem:any = null;
    items=[
      {name:'Dashboard',isChildren:false,url:'/web/dashboard'},
      {name:'Chart',isChildren:false,url:null},
      {name:'d3-Chart',isChildren:true,url:'/web/d3-chart'},
      {name:'chart.js',isChildren:true,url:'/web/chart-js'}
    ]
    constructor() { }

    ngOnInit() {
        if(this.items.length >0){
            this.selectedItem = this.items[0];
        }
    }
    onClick(item:any){
        this.selectedItem = item;
    }

}
