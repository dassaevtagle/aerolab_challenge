import { Component, Input, OnInit } from "@angular/core";
import { Icons } from "./icons.enum";

@Component({
  selector: "icon",
  template: `
    <div
      *ngIf="icon === Icons.LOGO"
      class="w-[38.77px] h-[36px] lg:w-[126px] lg:h-[48px]"
    >
      <logo></logo>
    </div>
    <div
      *ngIf="icon === Icons.KITE_AEROPAY"
      class="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px]"
    >
      <kite-aeropay></kite-aeropay>
    </div>
    <ng-container *ngIf="icon != Icons.KITE_AEROPAY && icon != Icons.LOGO">
      <div
        [ngSwitch]="icon"
        class="text-neutral-0 w-[20px] h-[20px] 2xl:w-[24px] 2xl:h-[24px]"
      >
        <arrow-down *ngSwitchCase="Icons.ARROW_DOWN"></arrow-down>
        <cursor *ngSwitchCase="Icons.CURSOR"></cursor>
        <compass *ngSwitchCase="Icons.COMPASS"></compass>
        <star *ngSwitchCase="Icons.STAR"></star>
        <kite *ngSwitchCase="Icons.KITE"></kite>
        <kite-disabled *ngSwitchCase="Icons.KITE_DISABLED"></kite-disabled>
        <kite-card *ngSwitchCase="Icons.KITE_CARD"></kite-card>
        <caret
          *ngSwitchCase="Icons.CARET_DOWN"
          [orientation]="'DOWN'"
          class="text-neutral-500"
        ></caret>
        <caret
          *ngSwitchCase="Icons.CARET_UP"
          [orientation]="'UP'"
          class="text-neutral-500"
        ></caret>
        <caret
          *ngSwitchCase="Icons.CARET_LEFT"
          [orientation]="'LEFT'"
          class="text-neutral-500"
        ></caret>
        <caret
          *ngSwitchCase="Icons.CARET_RIGHT"
          [orientation]="'RIGHT'"
          class="text-neutral-500"
        ></caret>
        <github *ngSwitchCase="Icons.GITHUB" class="text-neutral-500"></github>
        <success *ngSwitchCase="Icons.SUCCESS"></success>
        <error *ngSwitchCase="Icons.ERROR"></error>
        <close *ngSwitchCase="Icons.CLOSE"></close>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class IconComponent implements OnInit {
  @Input() icon: Icons;
  Icons = Icons;

  constructor() {}

  ngOnInit(): void {}
}
