/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'core-card',
  exportAs: 'coreCard',
  template: '<div class="core-card"><ng-content></ng-content></div>',
  styleUrls: ['card.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreCard implements OnInit {
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {

  }
}
