import { Component } from '@angular/core';
import { navbarText } from './navbar.text';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public text = navbarText;

  scroll(target: string) {
    document.getElementById(target).scrollIntoView();
  }
}
