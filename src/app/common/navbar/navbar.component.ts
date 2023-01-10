import {Component, OnInit} from '@angular/core';
import {NavigationService} from '@app//services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  currentUrl: string = '';
  showMenu: boolean = true;

  constructor(public navigationService: NavigationService) {
  }


  ngOnInit(): void {
    this.navigationService.showMenu.subscribe(e => {
      this.showMenu = e;
    })
  }

  currentUrlUpdate(s: string) {
    this.currentUrl = s;
  }

  hideMenu() {
    this.showMenu = false;
  }


}
