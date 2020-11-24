/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[coreButton]',
  exportAs: 'coreButton',
  template: '<ng-content></ng-content>',
  styleUrls: ['button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDirective implements OnInit {
  @Input() size: string = 'md';
  @Input() themeColor: string = 'primary';

  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    this.element.nativeElement.classList.add("core-button");

    switch(this.size) {
      case "sm": // Small
        this.element.nativeElement.classList.add("core-button__size-sm");
        break;
      case "lg": // Large
        this.element.nativeElement.classList.add("core-button__size-lg");
        break;
      default: // (md) Medium
        this.element.nativeElement.classList.add("core-button__size-md");
        break;
    }

    switch (this.themeColor) {
      case "secondary":
        this.element.nativeElement.classList.add("core-button__background-secondary");
        break;
      default: // Primary
        this.element.nativeElement.classList.add("core-button__background-primary");
        break;
    }
  }
}
