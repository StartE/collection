import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

import { GetSrcService } from './../services/get-src.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit,OnDestroy {

    articles:any[] = [];
    selectedArticle:any = null;
    static resourcesType:number = 1;
    subscribe:Subscription;
    constructor(private router:Router,private getSrcService:GetSrcService) { }

    ngOnInit() {
        this.getArticleList();
        
    }
    ngOnDestroy(){
        this.cancelRequest();
    }
    setDefault(){
        if(this.articles.length >0){
            this.selectedArticle = this.articles[0];
            this.router.navigate(['/resources/article/'+this.articles[0].id]);
        }
    }
    cancelRequest(){
        if(this.subscribe != undefined){
            this.subscribe.unsubscribe();
        }
    }

    getArticleList(){
        this.cancelRequest();
        this.subscribe = this.getSrcService.getSource('./../../assets/file/article-list.json').subscribe(
            res =>{
                this.articles = JSON.parse(res).articleList.filter( d => d.type == ResourcesComponent.resourcesType );
                this.setDefault();
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
