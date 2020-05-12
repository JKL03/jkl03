import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { IntroductionModule } from './components/introduction/introduction.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        IntroductionComponent,
        PortfolioComponent,
        AboutComponent,
        ContactComponent,
        PortfolioComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        MatCardModule,
        MatTabsModule,
        MatListModule,
        MatIconModule,
        IntroductionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
