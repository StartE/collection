import { Component, Input, OnInit,OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GetSrcService } from './../../services/get-src.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit,OnChanges,OnDestroy  {

    mdPath:string = '';
    tags:any[];
    src:Observable<string>;
    fileId:Observable<string>;
    getPath:Subscription;
    getTag:Subscription;
    constructor( private route: ActivatedRoute,private router: Router) { }
    ngOnInit() {
        this.src = this.route.paramMap.switchMap(
            (params:ParamMap) =>  params.getAll('src')
        );
        this.fileId = this.route.paramMap.switchMap(
            (params:ParamMap) =>  params.getAll('id')
        );
        this.getFilePath();
        this.getFileTags();
    }
    ngOnChanges(){
        
    }
    getFileTags(){
        this.getTag = this.fileId.subscribe(
            res =>{
                let id = +res;
            }
        )
    }
    getFilePath(){
        this.getPath = this.src.subscribe(
            res =>{
                this.mdPath = `./../../../assets/file/${res}.md`;
            },
            err =>{
                console.log(err);
            }
        )
    }

    ngOnDestroy() {
        this.getPath.unsubscribe();
    }

}
