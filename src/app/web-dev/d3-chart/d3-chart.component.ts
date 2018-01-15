import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit {

    @ViewChild('chart1') private chartContainer1:ElementRef;
    svg1:any;
    chart1:any;
    xAxis1:any;
    yAxis1:any;
    width:number = 500;
    height:number = 250;
    constructor() { }

    ngOnInit() {
        this.initChart();
        this.drawChart();

    }
    initChart(){
        let element = this.chartContainer1.nativeElement;
        this.svg1 = d3.select(element).append('svg');
        this.chart1 = this.svg1.append('g')
            .attr('width',this.width)
            .attr('height',this.height)
        this.xAxis1 = this.chart1.append('g')
            .attr('class','axis axis-x')
            .attr('transform',`translate(${50},${10})`);
        this.yAxis1 = this.chart1.append('g')
            .attr('class','axis axis-y')
            .attr('transform',`translate(${50},${0})`)
    }
    drawChart(){
        let data = [
            [10,10],
            [20,15],
            [40,20]
        ];
        let chartWidth = this.width - 60;
        let chartHeight = this.height - 60;
        let xDomain = data.map(d => d[0]);
        let yMax = d3.max(data,d=> d[1]);
        let xScale = d3.scaleBand().padding(1).domain(xDomain).rangeRound([0,chartWidth]);
        let yScale = d3.scaleLinear().domain([0,yMax]).range([chartHeight,0]);

        this.xAxis1.transition().call(d3.axisBottom(xScale));
        this.yAxis1.transition().call(d3.axisLeft(yScale));
    }


}
