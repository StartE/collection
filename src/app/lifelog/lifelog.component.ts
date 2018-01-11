import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lifelog',
  templateUrl: './lifelog.component.html',
  styleUrls: ['./lifelog.component.scss']
})
export class LifelogComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() {
        if(this.articles.length >0){
            this.selectedArticle = this.articles[0];
            this.router.navigate(['/lifelog/article/'+this.articles[0].id]);
        }
    }
    articles:any[]=[
        {id:1,name:'w222111uuuuu'},
        {id:2,name:'wuu323uuu'},
        {id:3,name:'ewwe23'},
        {id:4,name:'wusdd'},
    ]
    selectedArticle = null;

    onSelect(article){
        this.selectedArticle = article;
    }

}
