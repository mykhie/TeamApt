import {Component, Injector} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent {
  public showMenu = true;
  router: Router;

  constructor(injector: Injector) {
    this.router = injector.get(Router);
  }
}
