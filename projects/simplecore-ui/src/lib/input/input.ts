/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'input[coreInput]',
  exportAs: 'coreInput',
  template: '<ng-content></ng-content>',
  styleUrls: ['input.scss'],
  host: {
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreInput implements OnInit {
  @Input() appearance: string = "outline";

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
    if (this.appearance === "outline") {

    }

    switch(this.appearance) {
      case 'outline':
        // this.element.nativeElement.classList.add("core-input__outline");
        this.renderer.addClass(this.element.nativeElement, "core-input__outline");
        break;
      case 'standard':
        // this.element.nativeElement.classList.add("core-input__standard");
        this.renderer.addClass(this.element.nativeElement, "core-input__standard");
        break;
    }
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
  constructor() {
  }
  ngOnInit(): void {
  }
}
