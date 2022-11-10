import { Component, OnInit } from '@angular/core';
import { Icons } from '../../icons/icons.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  Icons = Icons
  githubUrl = "https://github.com/dassaevtagle/aerolab_challenge"
  constructor() { }

  ngOnInit(): void {
  }

}
