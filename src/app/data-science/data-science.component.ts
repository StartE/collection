import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss']
})
export class DataScienceComponent implements OnInit {

  title:string = "Data Science";
  showSidebar:boolean = true;
  items=[
      {name:'Python',isChildren:false,open:false,url:'/data/python',children:[]},
      {name:'Algorithm',isChildren:false,open:false,url:'/data/algorithm',children:[]},
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
