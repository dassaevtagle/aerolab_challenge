import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    ArrowDownComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IconComponent]
})
export class IconsModule { }
