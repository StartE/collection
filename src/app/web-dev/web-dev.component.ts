import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent implements OnInit {

    title:string = "Web Development";
    showSidebar:boolean = true;
    items=[
        {name:'Dashboard',isChildren:false,open:false,url:'/web/dashboard',children:[]},
        {name:'Chart',isChildren:false,open:false,url:null,children:[
          {name:'D3-Chart',isChildren:true,url:'/web/d3-chart'},
          {name:'Chart.js',isChildren:true,url:'/web/chart-js'}]
        },
        {name:'Code Tricks',isChildren:false,open:false,url:null,children:[
            {name:'30 Seconds of CSS',isChildren:true,url:'/web/30s-of-css'},]
        }
    ]
    constructor() { }

    ngOnInit() {
    }
    toggle(){
        this.showSidebar = !this.showSidebar;
    }
    gotoGithub(){
        window.open('https://github.com/StartE')
    }

}
