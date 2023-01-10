import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  showMenu: BehaviorSubject<boolean>;

  constructor() {
    this.showMenu = new BehaviorSubject<boolean>(true);
  }
  showMenuUpdate(state){
    this.showMenu.next(state);
  }
}
