import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './web-dev/dashboard/dashboard.component';
import { D3ChartComponent } from './web-dev/d3-chart/d3-chart.component';
import { PythonComponent } from './data-science/python/python.component';
import { AlgorithmComponent } from './data-science/algorithm/algorithm.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    WebDevComponent,
    DataScienceComponent,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,

    DashboardComponent,
    D3ChartComponent,
    PythonComponent,
    AlgorithmComponent
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
