import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/icons/icons.enum';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {
  Icons = Icons
  readonly heroImagePath = '/assets/img/hero-responsive.png'

  constructor() { }

  ngOnInit(): void {
  }

}
