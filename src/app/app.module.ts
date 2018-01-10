import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { DashboardComponent } from './web-dev/dashboard/dashboard.component';
import { D3ChartComponent } from './web-dev/d3-chart/d3-chart.component';

import { PythonComponent } from './data-science/python/python.component';
import { AlgorithmComponent } from './data-science/algorithm/algorithm.component';
import { ChartJsComponent } from './web-dev/chart-js/chart-js.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    WebDevComponent,
    DataScienceComponent,
    LifelogComponent,
    ResourcesComponent,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ArticleComponent,

    DashboardComponent,
    D3ChartComponent,
    PythonComponent,
    AlgorithmComponent,
    ChartJsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
