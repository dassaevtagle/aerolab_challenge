import { Component, OnInit } from "@angular/core";
import { Icons } from "../../icons/icons.enum";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  Icons = Icons;
  constructor() {}

  ngOnInit(): void {}
}
