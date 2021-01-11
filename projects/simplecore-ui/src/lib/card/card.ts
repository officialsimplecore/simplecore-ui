/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit, Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'core-card',
  exportAs: 'coreCard',
  template: '<div #cardEl class="core-card"><ng-content></ng-content></div>',
  styleUrls: ['card.scss']
})
export class CoreCard implements AfterViewInit {
  @Input() neumorphic: boolean = true;
  @ViewChild('cardEl') cardEl: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  // Find calculated width of the object to determine how to place the box shadow
  ngAfterViewInit(): void {
    const cardElement = this.cardEl.nativeElement;
    if (this.neumorphic) {
      const offset = cardElement.offsetHeight / 12;
      const blurOffset = offset * 1.7;
      this.renderer.setStyle(cardElement,
        'box-shadow', `0px ${offset}px ${blurOffset}px rgba(0,0,0,0.12),
              -0px -${offset}px ${blurOffset}px rgba(255,255,255,0.85)`);
    } else {
      this.renderer.addClass(cardElement, 'core-card__outline');
    }
  }
}
