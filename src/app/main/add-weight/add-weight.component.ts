import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationService} from '@app//services/navigation.service';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.scss']
})
export class AddWeightComponent implements OnInit {
  gender: string | undefined;
  days = Array.from(Array(40).keys());
  currentWeight = 56.4;
  exit = false;

  updateGender(gender: string) {
    this.gender = gender;
  }

  onScroll($event: any) {
    const elem = $event.currentTarget.scrollLeft;
    this.currentWeight = elem;// >= 2 ? elem / 10 : elem;
  }

  constructor(private router: Router, public navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigationService.showMenuUpdate(false);
  }


  back(): void {
    this.exit = true;
    this.navigationService.showMenuUpdate(true);
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 700);
  }
}
