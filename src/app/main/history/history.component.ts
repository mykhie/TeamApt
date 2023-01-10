import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  days: any = [
    {
      day :'M',
      percentage : '50%',
      class:0
    },{
      day :'T',
      percentage : '10%',
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
  ];

}
