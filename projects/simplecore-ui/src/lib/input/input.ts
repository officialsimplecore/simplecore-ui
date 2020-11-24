/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'input[coreInput]',
  exportAs: 'coreInput',
  template: '<ng-content></ng-content>',
  styleUrls: ['input.scss'],
  host: {
    'class': 'core-input',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreInput implements OnInit {
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    // this.element.nativeElement.classList.add("core-input");
  }
}

@Component({
  selector: 'label[coreLabel]',
  exportAs: 'coreLabel',
  template: '<ng-content></ng-content>',
  styleUrls: ['input.scss'],
  host: {
    'class': 'core-label',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreLabel implements OnInit {
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    // this.element.nativeElement.classList.add("core-label");
  }
}
