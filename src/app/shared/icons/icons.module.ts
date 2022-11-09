import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { IconComponent } from './icon.component';
import { CompassComponent } from './compass/compass.component';
import { StarComponent } from './star/star.component';
import { CursorComponent } from './cursor/cursor.component';
import { KiteComponent } from './kite/kite.component';



@NgModule({
  declarations: [
    ArrowDownComponent,
    IconComponent,
    CompassComponent,
    StarComponent,
    CursorComponent,
    KiteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IconComponent]
})
export class IconsModule { }
