import {Component} from '@angular/core';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.scss']
})
export class AddWeightComponent {
  gender: string | undefined;

  updateGender(gender: string) {
    this.gender = gender;
  }
}
