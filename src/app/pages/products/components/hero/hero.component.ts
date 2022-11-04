import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/icons/icons.enum';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {
  Icons = Icons
  readonly heroImagePath = '/assets/img/hero-desktop.png'

  constructor() { }

  ngOnInit(): void {
  }

}
