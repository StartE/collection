import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetSrcService } from './../../services/get-src.service';

import * as d3 from 'd3';
@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit {

    @ViewChild('chart1') private chartContainer1:ElementRef;
    @ViewChild('chart2') private chartContainer2:ElementRef;
    @ViewChild('chart3') private chartContainer3:ElementRef;
    @ViewChild('chart4') private chartContainer4:ElementRef;

    xScale:any;
    yScale:any;
    svg1:any;
    svg2:any;
    svg3:any;
    svg4:any;
    chart1:any;
    chart2:any;
    chart3:any;
    chart4:any;
    xAxis1:any;
    yAxis1:any;
    xAxis2:any;
    yAxis2:any;
    xAxis3:any;
    yAxis3:any;
    xAxis4:any;
    yAxis4:any;
    width:number = 800;
    height:number = 400;
    marginTop:number = 50;
    marginLeft:number = 50;
    marginBottom:number = 50;
    marginRight:number = 50;
    data = [
            [10,10],
            [20,15],
            [40,20]
    ];
    refresh:boolean = false;
    chartWidth = this.width-this.marginLeft - this.marginRight;
    chartHeight = this.height - this.marginTop - this.marginBottom;

    htmlCode1 = '';
    tsCode1 = '';
    cssCode2 = '';
    tsCode2 = '';

    constructor() { }
    ngOnInit() {
        this.initChart();
        this.setScale(this.data);
        this.drawChart1(this.data);
        this.drawChart2(this.data);
        this.drawChart3(this.data);
        this.drawChart4(this.data);
    }
    
    initChart(){
        let element1 = this.chartContainer1.nativeElement;
        let element2 = this.chartContainer2.nativeElement;
        let element3 = this.chartContainer3.nativeElement;
        let element4 = this.chartContainer4.nativeElement;

        this.svg1 = d3.select(element1).append('svg')
            .attr('width',this.width)
            .attr('height',this.height)

        this.chart1 = this.setChart(this.svg1)
        this.xAxis1 = this.setAxisX(this.svg1)
        this.yAxis1 = this.setAxisY(this.svg1)
        
        this.svg2 = d3.select(element2)
            .append('div')
            .classed('svg-container',true)
            .append('svg')
            .attr('preserveAspectRatio','xMinYMin meet')
            .attr('viewBox','0 0 800 400')
            .classed('svg-content-responsive',true)

        this.chart2 = this.setChart(this.svg2)
        this.xAxis2 = this.setAxisX(this.svg2)
        this.yAxis2 = this.setAxisY(this.svg2)

        this.svg3 = d3.select(element3)
            .append('div')
            .classed('svg-container',true)
            .append('svg')
            .attr('preserveAspectRatio','xMinYMin meet')
            .attr('viewBox','0 0 800 400')
            .classed('svg-content-responsive',true)

        this.chart3 = this.setChart(this.svg3)
        this.xAxis3 = this.setAxisX(this.svg3)
        this.yAxis3 = this.setAxisY(this.svg3)

        this.svg4 = d3.select(element4)
            .append('div')
            .classed('svg-container',true)
            .append('svg')
            .attr('id','svg4')
            .attr('preserveAspectRatio','xMinYMin meet')
            .attr('viewBox','0 0 800 400')
            .classed('svg-content-responsive',true)

        this.chart4 = this.setChart(this.svg4)
        this.xAxis4 = this.setAxisX(this.svg4)
        this.yAxis4 = this.setAxisY(this.svg4)
    }
    setChart(svg:any){
        return svg.append('g')
            .attr('class','chart')
            .attr('width',this.width -this.marginLeft - this.marginRight)
            .attr('height',this.height - this.marginTop - this.marginBottom)
    }
    setAxisX(svg:any){
        return svg.append('g')
            .attr('class','axis axis-x')
            .attr('transform',`translate(${this.marginLeft},${this.height-this.marginBottom})`);
    }
    setAxisY(svg:any){
        return svg.append('g')
            .attr('class','axis axis-y')
            .attr('transform',`translate(${this.marginLeft},${this.marginTop})`)
    }
    setScale(data:any){
        let xDomain = data.map(d => d[0]);
        let yMax = d3.max(data,d=> d[1]);
        this.xScale = d3.scaleBand().padding(1).domain(xDomain).rangeRound([0,this.chartWidth]);
        this.yScale = d3.scaleLinear().domain([0,yMax]).range([this.chartHeight,0]);
    }
    drawChart1(data:any){
        let barWidth = 20;
        this.xAxis1.transition().call(d3.axisBottom(this.xScale));
        this.yAxis1.transition().call(d3.axisLeft(this.yScale));
        let update = this.chart1.selectAll('g').data(data);
        update.enter().append('rect')
            .attr('class','bar')
            .attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)
            .attr('y',d => this.marginTop + this.yScale(d[1]))
            .attr('width',barWidth)
            .attr('height',d => this.chartHeight - this.yScale(d[1]))
            .style('fill','#e37f7f')
    }
    drawChart2(data:any){
        let barWidth = 20;
        this.xAxis2.transition().call(d3.axisBottom(this.xScale));
        this.yAxis2.transition().call(d3.axisLeft(this.yScale));
        let update = this.chart2.selectAll('g').data(data);
        update.enter().append('rect')
            .attr('class','bar')
            .attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)
            .attr('y',d => this.marginTop + this.yScale(d[1]))
            .attr('width',barWidth)
            .attr('height',d => this.chartHeight - this.yScale(d[1]))
            .style('fill','#e37f7f')
    }
    drawChart3(data){
        let barWidth = 20;
        this.xAxis3.transition().call(d3.axisBottom(this.xScale));
        this.yAxis3.transition().call(d3.axisLeft(this.yScale));
        let update = this.chart3.selectAll('.bar').data(data);
        update.exit().remove();//remove old;
        this.chart3.selectAll('.bar')//update exist
            .attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)
            .attr('y',this.chartHeight + this.marginTop)// the y position of xAxis
            .attr('width',barWidth)
            .attr('height',0)
            .style('fill','#87CEFA')//blue
            .transition()
            .duration(2000)
            .attr('y',d => this.marginTop + this.yScale(d[1]))
            .attr('height',d => this.chartHeight - this.yScale(d[1]))
            .style('fill','#7CCD7C')//green

        update.enter().append('rect')//add new
            .attr('class','bar')
            .attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)
            .attr('y',this.chartHeight + this.marginTop)// the y position of xAxis
            .attr('width',barWidth)
            .attr('height',0)
            .style('fill','#87CEFA')//blue
            .transition()
            .duration(2000)
            .attr('y',d => this.marginTop + this.yScale(d[1]))
            .attr('height',d => this.chartHeight - this.yScale(d[1]))
            .style('fill','#e37f7f')//red
    }
    updateData(){
        let data2 = [
            [10,50],
            [20,15],
            [30,35],
            [40,10],
            [50,40]
        ]
        this.refresh = !this.refresh;
        if(this.refresh){
            this.setScale(data2);
            this.drawChart3(data2);
        }else{
            this.setScale(this.data);
            this.drawChart3(this.data);        
        }
    }
    drawChart4(data){
        let barWidth = 50;
        this.xAxis4.transition().call(d3.axisBottom(this.xScale));
        this.yAxis4.transition().call(d3.axisLeft(this.yScale));
        let update = this.chart4.selectAll('g').data(data);
        let toolTip = d3.select('body').append('div')
            .attr('class','tooltip')
            .style('opacity',0);
        update.enter().append('rect')
            .attr('class','bar')
            .attr('x',d => this.marginLeft + this.xScale(d[0])-barWidth/2)
            .attr('y',d => this.marginTop + this.yScale(d[1]))
            .attr('width',barWidth)
            .attr('height',d => this.chartHeight - this.yScale(d[1]))
            .style('fill','#e37f7f')
            .on('mouseover',function(d){
                toolTip.transition()
                    .style('opacity',1);
                toolTip.html('d3-chart: '+d[1])
                    .style('left',(d3.event.pageX)+'px')
                    .style('top',(d3.event.pageY)+'px');
                d3.select(this).style('cursor','pointer');

            })
            .on('mouseout',function(d){
                toolTip.transition()
                    .style('opacity',0);
            });

        let textHeight = 10;
        update.enter().append('text')
            .attr('class','tt')
            .attr('x',d => this.marginLeft + this.xScale(d[0]))
            .attr('y',d => this.marginTop + this.yScale(d[1]) - textHeight)
            .attr('text-anchor','middle')
            .style('fill','#444')
            .text(d => d[1]);
    }
}
