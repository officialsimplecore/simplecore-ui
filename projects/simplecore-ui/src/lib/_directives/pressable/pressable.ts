﻿/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[corePressable]',
  host: {
    '(document:mouseup)': 'setPressed(false)',
    '(document:touchend)': 'setPressed(false)'
  }
})
export class PressableDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  // @HostListener('document:mouseup', ['$event'])
  // clickStop() {
  //   console.log("tset")
  //   this.setPressed(false);
  // }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'transform 180ms ease-in-out')
    this.element.nativeElement.addEventListener("mousedown", () => {
      this.setPressed(true);
    });
    this.element.nativeElement.addEventListener("touchstart", () => {
      this.setPressed(true);
    });
  }

  ngOnDestroy(): void {
    // Clean up
      // Remove event listeners causes problems with server side renderering
      // Modern browsers do garbage collection (IE 10+) on Event Listeners so
      // the practice of removing listeners is no longer necessary.
    // this.element.nativeElement.removeAllListeners();
  }

  private setPressed(pressIn: boolean): void {
    if (pressIn) {
      this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(0.90)');
    } else if (!pressIn) {
      this.renderer.setStyle(this.element.nativeElement, 'transform', 'scale(1)');
    }
  }
}
