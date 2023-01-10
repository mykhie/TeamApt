import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentUrl: string='';

  currentUrlUpdate(s: string) {
    this.currentUrl=s;
  }
}
