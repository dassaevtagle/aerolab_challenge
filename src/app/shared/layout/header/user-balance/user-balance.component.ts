import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/icons/icons.enum';

@Component({
  selector: 'user-balance',
  templateUrl: './user-balance.component.html',
  styles: [
  ]
})
export class UserBalanceComponent implements OnInit {
  Icons = Icons
  constructor() { }

  ngOnInit(): void {
  }

}
