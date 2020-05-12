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
    const scrolledY = document.getElementById(target).offsetTop - 30;
    window.scroll({ top: scrolledY, behavior: 'smooth' });
  }
}
