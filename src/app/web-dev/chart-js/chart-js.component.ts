import { Component, OnInit } from '@angular/core';
import { GetSrcService } from './../../services/get-src.service';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit {

  constructor( private getSrcService:GetSrcService) { }
  src = './../../../assets/file/test.ts';
  someCode:string = '';
  ngOnInit() {
      this.getSrcService.getSource(this.src).subscribe(
          res =>{
            this.someCode = res;
          },
          error =>{
            console.log(error)
          });
  }

}
