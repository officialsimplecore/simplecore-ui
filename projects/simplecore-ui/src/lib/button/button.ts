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

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }
  ngOnInit(): void {
    this.renderer.addClass(this.element.nativeElement, "core-button");

    switch(this.size) {
      case "sm": // Small
        this.renderer.addClass(this.element.nativeElement, "core-button__size-sm");
        break;
      case "lg": // Large
        this.renderer.addClass(this.element.nativeElement, "core-button__size-lg");
        break;
      default: // (md) Medium
        this.renderer.addClass(this.element.nativeElement, "core-button__size-md");
        break;
    }

    switch (this.themeColor) {
      case "secondary":
        this.renderer.addClass(this.element.nativeElement, "core-button__background-secondary");
        break;
      case "transparent":
        this.renderer.addClass(this.element.nativeElement, "core-button__transparent");
        break;
      default: // Primary
        this.renderer.addClass(this.element.nativeElement, "core-button__background-primary");
        break;
    }
  }
}
