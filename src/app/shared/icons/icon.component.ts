import { Component, Input, OnInit } from '@angular/core';
import { Icons } from './icons.enum';

@Component({
  selector: 'icon',
  template: `
    <div [ngSwitch]="icon" class="text-neutral-0 w-[20px] h-[20px] 2xl:w-[24px] 2xl:h-[24px]">
      <arrow-down *ngSwitchCase="Icons.ARROW_DOWN"></arrow-down>
      <cursor *ngSwitchCase="Icons.CURSOR"></cursor>
      <compass *ngSwitchCase="Icons.COMPASS"></compass>
      <star *ngSwitchCase="Icons.STAR"></star>
      <kite *ngSwitchCase="Icons.KITE"></kite>
    </div>
  `,
  styles: [
  ]
})
export class IconComponent implements OnInit {
  @Input() icon: Icons;
  Icons = Icons;

  constructor() { }

  ngOnInit(): void {
  }

}
