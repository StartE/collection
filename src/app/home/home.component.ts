import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    navigate(item) {
        console.log(item)
    }
    gotoGithub(){
        window.open('https://github.com/StartE')
    }

}
