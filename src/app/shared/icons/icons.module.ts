import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { IconComponent } from './icon.component';
import { CompassComponent } from './compass/compass.component';
import { StarComponent } from './star/star.component';
import { CursorComponent } from './cursor/cursor.component';
import { KiteAeropayComponent } from './kite-aeropay/kite-aeropay.component';
import { LogoComponent } from './logo/logo.component';
import { CaretComponent } from './caret/caret.component';
import { GithubComponent } from './github/github.component';
import { KiteComponent } from './kite/kite.component';
import { KiteCardComponent } from './kite-card/kite-card.component';
import { KiteDisabledComponent } from './kite-disabled/kite-disabled.component';



@NgModule({
  declarations: [
    ArrowDownComponent,
    IconComponent,
    CompassComponent,
    StarComponent,
    CursorComponent,
    KiteAeropayComponent,
    LogoComponent,
    CaretComponent,
    GithubComponent,
    KiteComponent,
    KiteCardComponent,
    KiteDisabledComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IconComponent]
})
export class IconsModule { }
