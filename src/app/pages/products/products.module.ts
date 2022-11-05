import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalkthroughCardsComponent } from './components/walkthrough-cards/walkthrough-cards.component';



@NgModule({
  declarations: [
    HeroComponent,
    ProductsComponent,
    WalkthroughCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
