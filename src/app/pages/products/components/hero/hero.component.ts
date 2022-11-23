import { ViewportScroller } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Icons } from "src/app/shared/icons/icons.enum";

@Component({
  selector: "hero",
  templateUrl: "./hero.component.html",
  styles: [],
})
export class HeroComponent implements OnInit {
  //Import this enum to set icon type
  Icons = Icons;
  readonly heroImagePath = "/assets/img/hero-desktop-cropped.png";
  readonly backgroundImgPath = "/assets/svg/wave-pattern.svg";

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollToProducts() {
    this.scroller.scrollToAnchor("products");
  }
}
