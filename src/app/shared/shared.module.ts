import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserBalanceComponent } from './layout/header/user-balance/user-balance.component';
import { PointsCardComponent } from './layout/header/user-balance/points-card/points-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserBalanceComponent,
    PointsCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsModule
  ],
  exports: [
    IconsModule,
    LayoutComponent,
  ],
})
export class SharedModule { }
