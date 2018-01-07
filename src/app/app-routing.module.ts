import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { DataScienceComponent } from './data-science/data-science.component';

import { DashboardComponent } from './web-dev/dashboard/dashboard.component';
import { D3ChartComponent } from './web-dev/d3-chart/d3-chart.component';
import { PythonComponent } from './data-science/python/python.component';
import { AlgorithmComponent } from './data-science/algorithm/algorithm.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'web', component: WebDevComponent,
    children: [
      {
          path: 'dashboard',
          component: DashboardComponent,
      }, 
      {
          path: 'chart',
          component: D3ChartComponent,
      }, 
      {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      }],
  },
  { path:'data',component: DataScienceComponent,
    children: [
    {
        path: 'python',
        component: PythonComponent,
    }, 
    {
        path: 'algorithm',
        component: AlgorithmComponent,
    }, 
    {
    path: '**',
    redirectTo: 'python',
    pathMatch: 'full',
    }],
  },
  { path: '**', redirectTo: '' },
];


const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}