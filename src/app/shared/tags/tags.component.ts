import { Component, OnInit, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit,OnChanges {

    @Input() currentTages:any[] = [];
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(){
    }

}
