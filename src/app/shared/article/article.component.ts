import { Component, Input, OnInit,OnChanges, OnDestroy } from '@angular/core';
import { GetSrcService } from './../../services/get-src.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit,OnChanges,OnDestroy  {

    mdPath:string = '';
    tags:any[] = [];
    @Input() article:any;
    constructor() { }
    ngOnInit() {
        
    }
    ngOnChanges(){
        if(this.article != undefined && this.article != null){
            this.getSrc();
            this.getTags();
        }
    }
    getSrc(){
        this.mdPath = './../../../assets/file/'+this.article.src;
    }
    getTags(){
        this.tags = this.article.tags;
    }
    ngOnDestroy() {
        
    }

}
