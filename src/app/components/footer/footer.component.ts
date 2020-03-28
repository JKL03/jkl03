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
    const innerHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;

    console.log('innerHeight: ' + innerHeight);
    console.log('scrollPosition: ' + scrollPosition);
    if (scrollPosition > 0) {
      this.hideToTopButton = true;
    } else {
      this.hideToTopButton = false;
    }

  }
}
