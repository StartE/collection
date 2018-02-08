import { Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GadgetMessageService{
    constructor(){}

    private closeGadgetSource = new Subject<any>();

    closeGadgetSource$ = this.closeGadgetSource.asObservable();

    announceGadgetClose(id:number){
        this.closeGadgetSource.next(id);
    }
}