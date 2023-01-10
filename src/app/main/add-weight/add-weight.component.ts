import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.scss']
})
export class AddWeightComponent implements OnInit {
  gender: string | undefined;
  days: any = Array.from(Array(40).keys());
  currentWeight = 56.4;

  updateGender(gender: string) {
    this.gender = gender;
  }

  onScroll($event: any) {
    let elem = $event.currentTarget.scrollLeft;
    this.currentWeight = elem;// >= 2 ? elem / 10 : elem;
  }

  ngOnInit() {
    let elem = document.querySelector('.bars');
    elem.scrollLeft += this.currentWeight;
    this.scrollToCurrentDiv()
  }


  scrollToCurrentDiv() {
    console.warn();
  }
}
