import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  days: any = [
    {
      day :'M',
      percentage : '50%',
      class:0
    },{
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
  ];
  counter: number = 1;

}
