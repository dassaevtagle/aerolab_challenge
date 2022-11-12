import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/icons/icons.enum';

@Component({
  selector: 'points-card',
  templateUrl: './points-card.component.html',
  styles: [
  ]
})
export class PointsCardComponent implements OnInit {
  readonly wavePatternPath = '/assets/svg/wave-pattern-card.svg'
  Icons = Icons
  constructor() { }

  ngOnInit(): void {
  }

}
