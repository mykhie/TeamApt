import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BaseComponent} from "@app//common/base/base.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('calories') c: any;
  @ViewChild('steps') s: any;
  @ViewChild('weight') w: any;
  @ViewChild('heartbeat') h: any;
  ngAfterViewInit() {
    this.animateValue(this.c, 0, 982, 2000);
    this.animateValue(this.s, 0, 2930, 2000);
    this.animateValue(this.w, 0, 89, 2000);
    this.animateValue(this.h, 0, 123, 2000);
  }
}
