import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BaseComponent} from "@app//common/base/base.component";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent extends BaseComponent implements AfterViewInit{
  days = [
   {
      day :'T',
      percentage : '20%',
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
    }
  ];
  @ViewChild('weight') w: any;
  ngAfterViewInit() {
    this.animateValue(this.w, 0, 59.4, 2000);
  }

}
