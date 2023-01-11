import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { AddWeightComponent } from './main/add-weight/add-weight.component';
import { HistoryComponent } from './main/history/history.component';
import { BaseComponent } from './common/base/base.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ProfileComponent } from './main/profile/profile.component';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddWeightComponent,
    HistoryComponent,
    BaseComponent,
    MessagesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
