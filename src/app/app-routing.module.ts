import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWeightComponent } from './main/add-weight/add-weight.component';
import { HistoryComponent } from './main/history/history.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'add-weight',
    component: AddWeightComponent
  }
  ,
  {
    path:'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
