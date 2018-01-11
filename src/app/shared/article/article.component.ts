import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit,OnDestroy  {

    sub:any;
    articleId:number;
    MAX_SIZE_OF_ARTICLES:number = 10;
    constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params =>{
            
            if(params['id'] != undefined){
                this.articleId = parseInt(params['id']);
                if(this.articleId > this.MAX_SIZE_OF_ARTICLES){
                    this.router.navigate(['/page-not-found'])
                }
            }
        })
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
