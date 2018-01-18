import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetSrcService } from './../services/get-src.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

    articles:any[] = [];
    selectedArticle:any = null;
    static resourcesType:number = 1;
    constructor(private router:Router,private getSrcService:GetSrcService) { }

    ngOnInit() {
        this.getArticleList();
    }

    getArticleList(){
        this.getSrcService.getSource('./../../assets/file/article-list.json').subscribe(
            res =>{
                this.articles = JSON.parse(res).articleList.filter( d => d.type == ResourcesComponent.resourcesType );
                if(this.articles.length >0){
                    this.selectedArticle = this.articles[0];
                    this.router.navigate(['/resources/article/'+this.articles[0].id]);
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
