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
    tags:any[] = [];
    selectedArticle:any = null;
    currentTages:any[] = [];
    static resourcesType:number = 1;
    subscribe:Subscription;
    constructor(private getSrcService:GetSrcService) { }

    ngOnInit() {
        this.getArticleList();    
    }
    ngOnDestroy(){
        this.cancelRequest();
    }
    setDefault(){
        if(this.articles.length >0){
            this.selectedArticle = this.articles[0];
            this.getTags();
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
                this.tags = JSON.parse(res).tags;
                this.setDefault();
            },
            error =>{
                console.log(error);
            }
        )
    }
    onSelect(article){
        this.selectedArticle = article;
        this.getTags();
    }
    gotoGithub(){
        window.open('https://github.com/StartE')
    }
    getTags(){
        this.currentTages = [];
        for(let i = 0; i<this.selectedArticle.tags.length; i++){
            let id = this.selectedArticle.tags[i];
            this.currentTages.push(this.tags[id]);
        }
    }

}
