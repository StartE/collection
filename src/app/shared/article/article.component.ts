import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit,OnDestroy  {

    sub:any;
    articleId:number;
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params =>{
            
            if(params['id'] != undefined){
                this.articleId = parseInt(params['id']);
            }
        })
      
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
