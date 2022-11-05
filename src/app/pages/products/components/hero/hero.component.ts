import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/icons/icons.enum';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {
  //Import this enum to set icon type
  Icons = Icons
  readonly heroImagePath = '/assets/img/hero-desktop.png'
  readonly backgroundImgPath = '/assets/svg/wave-pattern.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
