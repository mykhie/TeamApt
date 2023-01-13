import {Component, Injector, Renderer2} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent {
  public showMenu = true;
  router: Router;

  constructor(injector: Injector, private render: Renderer2) {
    this.router = injector.get(Router);
  }

  animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = timestamp => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.round(Math.min((timestamp - startTimestamp) / duration, 1));
      obj.nativeElement.innerHTML = Math.floor(
        progress * (end - start) + start
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  get today() {
    let objToday = new Date();
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayOfWeek = weekday[objToday.getDay()],
      dayOfMonth =   (objToday.getDate() < 10) ? '0' + objToday.getDate()  : objToday.getDate() ,
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      curMonth = months[objToday.getMonth()];
    return  dayOfWeek + " ,"+ dayOfMonth + " " + curMonth;
  };


}
