import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BaseComponent} from "@app//common/base/base.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements AfterViewInit{
  days = [
   {
      day :'T',
      percentage : '30%',
      class:1
    },{
      day :'W',
      percentage : '90%',
      class:0
    },{
      day :'T',
      percentage : '40%',
      class:0
    },{
      day :'F',
      percentage : '60%',
      class:1
    },{
      day :'S',
      percentage : '80%',
      class:1
    },{
      day :'S',
      percentage : '70%',
      class:0
    },
    {
      day :'M',
      percentage : '50%',
      class:0
    },
  ];
  counter = 1;

  @ViewChild('calories') c: any;
  @ViewChild('steps') s: any;
  @ViewChild('mins') m: any;
  ngAfterViewInit() {
    this.animateValue(this.c, 0, 982, 2000);
    this.animateValue(this.s, 0, 2930, 2000);
    this.animateValue(this.m, 0, 650, 2000);
  }
}
