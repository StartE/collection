import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'ngx-md';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { LifelogComponent } from './lifelog/lifelog.component';
import { ResourcesComponent } from './resources/resources.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ArticleComponent } from './shared/article/article.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CodeHighlighterModule } from './shared/codeHighlighter/codeHighlighter';
import { SubHomeComponent } from './shared/sub-home/sub-home.component';
import { TagsComponent } from './shared/tags/tags.component';
import { GadgetComponent } from './shared/gadget/gadget.component';
import { GadgetOneComponent } from './shared/gadget/gadget-one/gadget-one.component';
import { GadgetTwoComponent } from './shared/gadget/gadget-two/gadget-two.component';
import { GadgetThreeComponent } from './shared/gadget/gadget-three/gadget-three.component';
import { GadgetContainerComponent } from './shared/gadget/gadget-container/gadget-container.component';

import { DashboardComponent } from './web-dev/dashboard/dashboard.component';
import { D3ChartComponent } from './web-dev/d3-chart/d3-chart.component';

import { PythonComponent } from './data-science/python/python.component';
import { AlgorithmComponent } from './data-science/algorithm/algorithm.component';
import { ChartJsComponent } from './web-dev/chart-js/chart-js.component';

import { GetSrcService } from './services/get-src.service';
import { GadgetMessageService } from './services/gadget-message.service';

import { AddGadgetDirective } from './shared/add-gadget/add-gadget.directive';
import { CodeTricksComponent } from './web-dev/code-tricks/code-tricks.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    WebDevComponent,
    DataScienceComponent,
    LifelogComponent,
    ResourcesComponent,
    
    DashboardComponent,
    D3ChartComponent,
    PythonComponent,
    AlgorithmComponent,
    ChartJsComponent,
    SubHomeComponent,

    /** shared component */
    TagsComponent,
    GadgetComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ArticleComponent,
    PageNotFoundComponent,
    GadgetOneComponent,
    GadgetTwoComponent,
    GadgetThreeComponent,
    GadgetContainerComponent,

    /** directives */
    AddGadgetDirective,

    CodeTricksComponent,
  ],
  entryComponents:[
    GadgetOneComponent,
    GadgetTwoComponent,
    GadgetThreeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    CodeHighlighterModule,
  ],
  providers: [
      GetSrcService,
      GadgetMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
