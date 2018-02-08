import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, HostListener, Input, ViewRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { AddGadgetDirective } from './../../shared/add-gadget/add-gadget.directive';
import { GadgetComponent } from './../../shared/gadget/gadget.component';
import { GadgetOneComponent } from './../../shared/gadget/gadget-one/gadget-one.component';
import { GadgetTwoComponent } from './../../shared/gadget/gadget-two/gadget-two.component';
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
    gadgetIndexMap:Map<number,ViewRef> = new Map<number,ViewRef>();
    currentMoverId:number;
    currentOverId:number;
    closeGadgetSubscription:Subscription;

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
            {id: 1,name:"gadget-one",data:"hhhh-one",component:GadgetOneComponent},
            {id: 2,name:"gadget-two",data:"hhhh-two",component:GadgetTwoComponent},
            {id: 3,name:"gadget-3",data:"hhhh-3",component:GadgetOneComponent},
            {id: 4,name:"gadget-4",data:"hhhh-4",component:GadgetTwoComponent},
            {id: 5,name:"gadget-5",data:"hhhh-5",component:GadgetTwoComponent},
            {id: 6,name:"gadget-6",data:"hhhh-6",component:GadgetOneComponent},
        ];

        this.loadComponent();
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
            this.gadgetIndexMap.set(gadgetItem.id,componentRef.hostView);
        });
    }
    closeGadget(id:number){
        let viewContainerRef = this.gadgetContainer.viewContainerRef;
        let index = viewContainerRef.indexOf(this.gadgetIndexMap.get(id))
        viewContainerRef.remove(index);
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
        let sourceView = this.gadgetIndexMap.get(id);
        let targetId = viewContainerRef.indexOf(this.gadgetIndexMap.get(overId));console.log(targetId,'target')
        if(targetId < this.gadgets.length -1){
            viewContainerRef.move(sourceView,targetId);
        }else{
            //do nothing
        }
    }
    

}
