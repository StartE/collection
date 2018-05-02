import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit {

    constructor() { }

/** 
    totalNodes:number = 0;
    maxLabelLength:number = 0;

    selectedNode:any = null;
    draggingNode:any = null;

    panSpeed:number = 200;
    panBoundary:number = 20;

    i: number = 0;
    duration:number = 750;
    root:any;

    viewWidth = 400;
    viewHeight = 500;

    tree = d3.tree.size([this.viewHeight,this.viewWidth]);
    diagonal = d3.diagonal.projection(d => [d.y,d.x]);

    treeData:any;
*/
    @ViewChild('myTree') private treeContainer:ElementRef;
    baseSvg:any;
    svgGroup:any;

    viewHeight = 600;
    viewWidth = 400;
    tree:any;
    ngOnInit(){
        this.tree = d3.tree().size([this.viewHeight,this.viewWidth]);
        this.getJSON();
    }


    updateTree(root){
        console.log(root);
        let levelWidth = [1];
        let childCount = (level,n) =>{
            if(n.children && n.children.length > 0){
                if(levelWidth.length <= level + 1) levelWidth.push(0);
                levelWidth[level+1] += n.children.length;
                n.children.forEach(n => {
                    childCount(level + 1, n);
                });
            }
        }
        childCount(0,root);
        console.log(levelWidth);
        
        let newHeight = d3.max(levelWidth)*25; //25pixel per line
        let tree = d3.cluster().size([this.viewHeight,this.viewWidth]);
        tree(root);// Assigns the x and y coordinates for the nodes.
        let nodeArray = root.descendants();// Returns array of link objects between nodes.

        
        let dragListerner = d3.drag()
            .on("start", function(d){
                d3.select(this).raise().classed("active", true);
            })
            .on("drag", function(d){
                console.log(d3.event)
                d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

            })
            .on("end", function(d){
                d3.select(this).classed("active", false);
                console.log(d3.event)
                //d3.select(this).attr("transform", "translate(" + d3.event.x + "," + d3.event.y + ")");

            });

        


        let updateLink = this.svgGroup.selectAll('.link').data(nodeArray.slice(1));
        updateLink.exit().remove();//remove old;
        updateLink.selectAll('.link')
            .attr('d',d => `M${d.y},${d.x},C${d.y},${(d.x + d.parent.x)/2} ${d.parent.y},${(d.x + d.parent.x)/2} ${d.parent.y},${d.parent.x}`)
        let links = updateLink.enter().append('g')
            .attr('class','link')
            .append('path')
            .attr('d',d => `M${d.y},${d.x},C${d.y},${(d.x + d.parent.x)/2} ${d.parent.y},${(d.x + d.parent.x)/2} ${d.parent.y},${d.parent.x}`)
            .attr('fill','none')
            .attr('stroke','#ccc')
            .attr('stroke-width','2px')

        let updateNode = this.svgGroup.selectAll('.node').data(nodeArray);// Returns array of node objects.
        updateNode.exit().remove();
        updateNode.selectAll('.node')
            .attr('transform',d => `translate(${d.y},${d.x})`)
        let nodes = updateNode.enter().append('g')
            .attr('class','node')
            .attr('transform',d => `translate(${d.y},${d.x})`)
            .append('circle')
            .attr('fill','blue')
            .attr('stroke','red')
            .attr('stroke-width','2px')
            .attr("r", 20)
            .call(dragListerner);


    }
    getJSON(){
        let element = this.treeContainer.nativeElement;

        this.baseSvg = d3.select(element).append('svg')
            .attr('width',this.viewWidth)
            .attr('height',this.viewHeight)
            .attr('class','overlay');
        this.svgGroup = this.baseSvg.append('g');

        d3.json("./../../../assets/data/new.json", treeData => {
            let rootTree = d3.hierarchy(treeData);//// Assigns parent, children, height, depth, etc..

            this.updateTree(rootTree);
        });
    }
    

}
