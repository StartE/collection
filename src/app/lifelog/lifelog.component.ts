import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetSrcService } from './../services/get-src.service';

@Component({
  selector: 'app-lifelog',
  templateUrl: './lifelog.component.html',
  styleUrls: ['./lifelog.component.scss']
})
export class LifelogComponent implements OnInit {

    articles:any[] = [];
    selectedArticle:any = null;
    static lifelogType:number = 2;
    constructor(private router:Router,private getSrcService:GetSrcService) { }

    ngOnInit() {
        this.getArticleList();
    }

    getArticleList(){
        this.getSrcService.getSource('./../../assets/file/article-list.json').subscribe(
            res =>{
                this.articles = JSON.parse(res).articleList.filter( d => d.type == LifelogComponent.lifelogType );
                if(this.articles.length >0){
                    this.selectedArticle = this.articles[0];
                    this.router.navigate(['/lifelog/article/'+this.articles[0].id]);
                }
            },
            error =>{
                console.log(error);
            }
        )
    }
    onSelect(article){
        this.selectedArticle = article;
    }


}
