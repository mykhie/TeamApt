import {Component} from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages = [
    {"msg": "How are you", "name": "James Mkenya"},
    {"msg": "Morning", "name": "Dr Naija"},
    {"msg": "Check my acc", "name": "Mr Mganda"},
    {"msg": "Thank you", "name": "Michael Osoro"},
    {"msg": "Goodbye", "name": "Kobe Bryant"}
  ];

}
