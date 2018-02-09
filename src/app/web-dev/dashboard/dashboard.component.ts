import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, HostListener, Input, ViewRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { AddGadgetDirective } from './../../shared/add-gadget/add-gadget.directive';
import { GadgetComponent } from './../../shared/gadget/gadget.component';
import { GadgetOneComponent } from './../../shared/gadget/gadget-one/gadget-one.component';
import { GadgetTwoComponent } from './../../shared/gadget/gadget-two/gadget-two.component';
import { GadgetThreeComponent } from './../../shared/gadget/gadget-three/gadget-three.component';
import { GadgetMessageService } from './../../services/gadget-message.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy{

    gadgets: any[];
    currentAddIndex: number = -1;
    @ViewChild(AddGadgetDirective)gadgetContainer:AddGadgetDirective;
    subsription:any;
    interval:any;
    placeholder:ComponentRef<any>;
    gadgetViewIndexMap:Map<number,ViewRef> = new Map<number,ViewRef>();
    gadgetComponentIndexMap:Map<number,ComponentRef<any>> = new Map<number,ComponentRef<any>>();

    currentMoverId:number;
    currentOverId:number;
    closeGadgetSubscription:Subscription;
    gadgetIndexList:any[] = [];
    constructor(private componentFactoryResolver:ComponentFactoryResolver,private gadgetMessageService:GadgetMessageService ) {
        this.closeGadgetSubscription = this.gadgetMessageService.closeGadgetSource$.subscribe(
            id =>{
                this.closeGadget(id);
            },
            error =>{
                console.log(error);
            });
    }

    ngOnInit() {
        this.gadgets = [
            {id: 1,name:"gadget-one",data:{style:'gadgetOne'},component:GadgetOneComponent},
            {id: 2,name:"gadget-two",data:{style:'gadgetTwo'},component:GadgetTwoComponent},
            {id: 3,name:"gadget-3",data:{style:'gadgetOne'},component:GadgetOneComponent},
            {id: 4,name:"gadget-4",data:{style:'gadgetTwo'},component:GadgetTwoComponent},
            {id: 5,name:"gadget-5",data:{style:'gadgetTwo'},component:GadgetTwoComponent},
            {id: 6,name:"gadget-6",data:{style:'gadgetOne'},component:GadgetOneComponent},
            {id: 7,name:"gadget-7",data:{style:'gadgetThree'},component:GadgetThreeComponent},
            {id: 8,name:"gadget-8",data:{style:'gadgetThree'},component:GadgetThreeComponent},

        ];

        this.loadComponent();
        this.logGadgetIndex();
    }


    ngOnDestroy(){
        this.closeGadgetSubscription.unsubscribe();
    }
    ngAfterViewInit(){
    }
    loadComponent(){
        let viewContainerRef = this.gadgetContainer.viewContainerRef;
        viewContainerRef.clear();

        this.gadgets.forEach(gadgetItem => {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(gadgetItem.component);

            let componentRef = viewContainerRef.createComponent(componentFactory);

            (<GadgetComponent>componentRef.instance).data = gadgetItem.data;
            (<GadgetComponent>componentRef.instance).id = gadgetItem.id;
            (<GadgetComponent>componentRef.instance).name = gadgetItem.name;

            (<GadgetComponent>componentRef.instance).onDragStartGadget.subscribe(val => this.currentMoverId = val);
            (<GadgetComponent>componentRef.instance).onDragOverGadget.subscribe(
                val => {
                this.currentOverId = val;
            });

            this.gadgetViewIndexMap.set(gadgetItem.id,componentRef.hostView);
            this.gadgetComponentIndexMap.set(gadgetItem.id,componentRef);

            let location = componentRef.location.nativeElement.clientWidth;
            console.log(gadgetItem.id,location);
        });
    }
    closeGadget(id:number){
        let viewContainerRef = this.gadgetContainer.viewContainerRef;
        let index = viewContainerRef.indexOf(this.gadgetViewIndexMap.get(id))
        viewContainerRef.remove(index);
        this.logGadgetIndex();

    }
    
    @HostListener('dragover',['$event'])
    onDragOver(event: DragEvent){
        event.preventDefault();
    }


    @HostListener('drop',['$event'])
    onDrop(event: DragEvent){
        event.preventDefault();
        let id = this.currentMoverId;
        let overId = this.currentOverId;
        this.doDrop(event.clientX,event.clientY,id,overId);
    }
    doDrop(x,y,id,overId){
        let viewContainerRef = this.gadgetContainer.viewContainerRef;
        let sourceView = this.gadgetViewIndexMap.get(id);
        this.getNearestViewRef(x,y)
        let targetId = viewContainerRef.indexOf(this.gadgetViewIndexMap.get(overId));console.log(targetId,'target')
        if(targetId < this.gadgets.length -1){
            viewContainerRef.move(sourceView,targetId);
        }else{
            //do nothing
        }
        this.logGadgetIndex();

    }
    logGadgetIndex(){
        this.gadgetIndexList = [];
        let viewContainerRef = this.gadgetContainer.viewContainerRef;
        this.gadgets.forEach(g => {
            let id = g.id;
            let index = viewContainerRef.indexOf(this.gadgetViewIndexMap.get(id));
            if(index != -1){
                this.gadgetIndexList.push({id:id,index:index});
            }
        });
    }
    getNearestViewRef(x,y){

        let viewContainerRef = this.gadgetContainer.viewContainerRef;
        let sourceLocation = this.gadgetComponentIndexMap.get(this.currentMoverId).location.nativeElement.getBoundingClientRect();
        console.log(this.currentMoverId)
        console.log(sourceLocation);
        /** 
        for(let i = 0; i< this.gadgetIndexList.length; i++){
            let id = this.gadgetIndexList[i].id;
            let view = this.gadgetComponentIndexMap.get(id).location.nativeElement.getBoundingClientRect();
        }
        */
    }

}
