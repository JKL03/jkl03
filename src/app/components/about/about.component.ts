import { Component } from '@angular/core';
import { aboutText } from './about.text';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public text = aboutText;

  constructor() {
  }
}
