import { Component } from '@angular/core';
import { contactText } from './contact.text';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public text = contactText;

  constructor() {
  }
}
