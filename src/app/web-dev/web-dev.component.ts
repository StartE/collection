import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent implements OnInit {

    title:string = "Web Development";
    showSidebar:boolean = true;
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
