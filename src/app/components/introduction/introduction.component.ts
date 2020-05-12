import { Component } from '@angular/core';
import { introductionText } from './introduction.text';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {

  public text = introductionText;

  constructor() {
  }
}
