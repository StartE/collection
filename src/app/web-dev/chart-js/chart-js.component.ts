import { Component, OnInit } from '@angular/core';
import { GetSrcService } from './../../services/get-src.service';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit {

  constructor( private getSrcService:GetSrcService) { }
  a= [
      {id:1,name:'222'},
      {id:2,name:'444'}
  ]
  ngOnInit(){

  }

}
