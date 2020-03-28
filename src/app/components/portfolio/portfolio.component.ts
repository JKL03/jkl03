import { Component } from '@angular/core';
import { portfolioText } from './portfolio.text';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public text = portfolioText;

  constructor() {
  }
}
