import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '@app//services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  currentUrl = '';
  showMenu = true;

  constructor(public navigationService: NavigationService, private router: Router) {
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

  isUrlActive(url) {
    // return url;
    if (url === '') return true;

    return this.router.url.includes(url);
  }


}
