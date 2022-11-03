import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './products.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [
    HeroComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
