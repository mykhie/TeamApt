import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWeightComponent } from './main/add-weight/add-weight.component';
import { HistoryComponent } from './main/history/history.component';
import { HomeComponent } from './main/home/home.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ProfileComponent } from './main/profile/profile.component';

const routes: Routes = [
  {
    path:'home',
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
  },
  {
    path:'messages',
    component: MessagesComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
