import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';
import { ServicesComponentText } from './services.component.text';

declare var gsap: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public text: ServicesComponentText;

  ngOnInit() {
    if (this.store.SERVICES_ANIMATION) {
      gsap.from('#right', {opacity: 0, duration: 1, y: -50});
      gsap.from('#block1', {opacity: 0, duration: 1.5, delay: 0.4});
      gsap.from('#block2', {opacity: 0, duration: 1.5, delay: 0.6});
    } else {
      gsap.from('#left,#right,#block1,#block2,#block3', {
        opacity: 0,
      });
    }
    this.store.SERVICES_ANIMATION = false;
  }

  constructor(public store: StoreService) {
  }
}
