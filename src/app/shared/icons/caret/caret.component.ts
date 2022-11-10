import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'caret',
  templateUrl: './caret.component.html',
  styles: [
  ]
})
export class CaretComponent implements OnInit {
  @Input() orientation: string;
  constructor() { }

  ngOnInit(): void {
  }

}
