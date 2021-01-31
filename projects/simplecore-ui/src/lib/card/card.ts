/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'core-card',
  exportAs: 'coreCard',
  template: '<div #cardEl class="core-card"><ng-content></ng-content></div>',
  styleUrls: ['card.scss']
})
export class CoreCard implements AfterViewInit, AfterViewChecked {
  @Input() neumorphic: boolean = true;
  @ViewChild('cardEl') cardEl: ElementRef;

  private neumorphicShadowIsSet: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    if (this.neumorphic) {
      this.setNeumorphicShadow();
    } else {
      this.renderer.addClass(this.cardEl.nativeElement, 'core-card__outline');
    }
  }

  // Find calculated width of the object to determine how to place the box shadow
  ngAfterViewChecked(): void {
    if (!this.neumorphic) {
      return;
    }
    if (this.neumorphicShadowIsSet) {
      return;
    }
    this.setNeumorphicShadow();
  }

  private setNeumorphicShadow(): void {
    const offset = this.cardEl.nativeElement.offsetHeight / 12;
    if (offset !== 0) {
      this.neumorphicShadowIsSet = true;
    } else {
      return;
    }
    const blurOffset = offset * 1.7;
    this.renderer.setStyle(this.cardEl.nativeElement,
      'box-shadow', `0px ${offset}px ${blurOffset}px rgba(0,0,0,0.12),
              -0px -${offset}px ${blurOffset}px rgba(255,255,255,0.85)`);
  }
}
