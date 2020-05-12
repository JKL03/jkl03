import { Component, ElementRef, HostListener } from '@angular/core';
import { footerText } from './footer.text';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public text = footerText;
  public hideToTopButton = false;

  constructor(public element: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.hideToTopButton = window.pageYOffset > 0;
  }
}
