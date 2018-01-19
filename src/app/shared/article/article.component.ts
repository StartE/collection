import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { GetSrcService } from './../../services/get-src.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit,OnDestroy  {

    sub:any;
    articleId:number;
    MAX_SIZE_OF_ARTICLES:number = 7;
    mdPath:string = '';

    constructor(private router:Router,private activatedRoute: ActivatedRoute, private getSrcService:GetSrcService ) { }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params =>{
            
            if(params['id'] != undefined){
                this.articleId = parseInt(params['id']);
                if(this.articleId <= this.MAX_SIZE_OF_ARTICLES && this.articleId > 0){
                    this.getSrc();
                }
                else if(this.articleId > this.MAX_SIZE_OF_ARTICLES){
                    this.router.navigate(['/page-not-found']);
                    return;
                }
            }
        })
    }
    getSrc(){
        this.mdPath = './../../../assets/file/'+this.articleId+'.md';
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
