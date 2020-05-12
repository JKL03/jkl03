import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DividerComponent } from '../../share/divider/divider.component';

@NgModule({
    declarations: [
        DividerComponent
    ],
    exports: [
        DividerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class IntroductionModule {
}