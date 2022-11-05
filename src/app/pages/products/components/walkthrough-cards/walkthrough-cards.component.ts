import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/icons/icons.enum';

@Component({
  selector: 'walkthrough-cards',
  templateUrl: './walkthrough-cards.component.html',
  styles: [
  ]
})
export class WalkthroughCardsComponent implements OnInit {
  Icons = Icons
  readonly steps = [
    {
      name: 'browse',
      description: 'Browse our tech catalog with more than 20 top tech products',
      icon: Icons.COMPASS,
      image: '/assets/img/walkthroug-1-desktop.png'
    },
    {
      name: 'choose',
      description: 'Exchange your hard earned AeroPoints for the item you want',
      icon: Icons.CURSOR,
      image: '/assets/img/walkthroug-2-desktop.png'
    },
    {
      name: 'enjoy',
      description: 'All done, you can relax! We’ll take care of delivery of your tech item!',
      icon: Icons.STAR,
      image: '/assets/img/walkthroug-3-desktop.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
