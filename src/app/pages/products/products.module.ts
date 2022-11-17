import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalkthroughCardsComponent } from './components/walkthrough-cards/walkthrough-cards.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsPaginationComponent } from './products-pagination/products-pagination.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroComponent,
    ProductsComponent,
    WalkthroughCardsComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductsPaginationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
