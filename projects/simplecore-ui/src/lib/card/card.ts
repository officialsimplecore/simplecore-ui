/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'input[coreCard]',
  exportAs: 'coreCard',
  template: '<ng-content></ng-content>',
  styleUrls: ['card.scss'],
  host: {
    'class': 'core-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreCard implements OnInit {
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    // this.element.nativeElement.classList.add("core-input");
  }
}
