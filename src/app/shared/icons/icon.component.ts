import { Component, Input, OnInit } from '@angular/core';
import { Icons } from './icons.enum';

@Component({
  selector: 'icon',
  template: `
    <div [ngSwitch]="icon" class="text-neutral-0 w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]">
      <arrow-down *ngSwitchCase="Icons.ARROW_DOWN"></arrow-down>
      <cursor *ngSwitchCase="Icons.CURSOR"></cursor>
      <compass *ngSwitchCase="Icons.COMPASS"></compass>
      <star *ngSwitchCase="Icons.STAR"></star>
    </div>
  `,
  styles: [
  ]
})
export class IconComponent implements OnInit {
  @Input() icon!: Icons;
  Icons = Icons;

  constructor() { }

  ngOnInit(): void {
  }

}
