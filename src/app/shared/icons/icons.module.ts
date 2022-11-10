import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { IconComponent } from './icon.component';
import { CompassComponent } from './compass/compass.component';
import { StarComponent } from './star/star.component';
import { CursorComponent } from './cursor/cursor.component';
import { KiteComponent } from './kite/kite.component';
import { LogoComponent } from './logo/logo.component';
import { CaretComponent } from './caret/caret.component';
import { GithubComponent } from './github/github.component';



@NgModule({
  declarations: [
    ArrowDownComponent,
    IconComponent,
    CompassComponent,
    StarComponent,
    CursorComponent,
    KiteComponent,
    LogoComponent,
    CaretComponent,
    GithubComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IconComponent]
})
export class IconsModule { }
