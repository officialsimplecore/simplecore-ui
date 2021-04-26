/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  AfterViewInit,
  Component, ElementRef, Input,
  Renderer2, ViewChild, ViewEncapsulation
} from '@angular/core';
import {RendererExtensions} from "../_static/renderer-extensions";
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";

@Component({
  selector: 'core-vstack',
  exportAs: 'coreVStack',
  template: '<div #vStack class="core-vstack"><ng-content></ng-content></div>',
  styleUrls: ['stack.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoreVStack implements AfterViewInit {
  // IO
  @ViewChild('vStack') vStack: ElementRef;
  @Input() overrideMarginSize: number | undefined;
  @Input() marginSize: "small" | "medium" | "large" = "medium";

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    if (this.overrideMarginSize === undefined) {
      let marginPixels: number = convertSizeToPixels(this.marginSize);
      RendererExtensions.addStyleToChildren(this.renderer, this.vStack.nativeElement, "margin-bottom", `${marginPixels}px`, avoidLast);
    } else {
      RendererExtensions.addStyleToChildren(this.renderer, this.vStack.nativeElement, "margin-bottom", `${this.overrideMarginSize}px`, avoidLast);
    }
  }
}

@Component({
  selector: 'core-hstack',
  exportAs: 'coreHStack',
  template: '<div #hStack class="core-hstack"><ng-content></ng-content></div>',
  styleUrls: ['stack.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoreHStack implements AfterViewInit {
  // IO
  @ViewChild('hStack') hStack: ElementRef;
  @Input() overrideMarginSize: number | undefined;
  @Input() marginSize: "small" | "medium" | "large" = "medium";

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    if (this.overrideMarginSize === undefined) {
      let marginPixels: number = convertSizeToPixels(this.marginSize);
      RendererExtensions.addStyleToChildren(this.renderer, this.hStack.nativeElement, "margin-right", `${marginPixels}px`, avoidLast);
    } else {
      RendererExtensions.addStyleToChildren(this.renderer, this.hStack.nativeElement, "margin-right", `${this.overrideMarginSize}px`, avoidLast);
    }
  }
}

export const convertSizeToPixels = (size:  "small" | "medium" | "large"): number => {
  switch (size) {
    case "large":
      return 15;
    case "small":
      return 5;
    default:
      return 10;

  }
}

export const avoidLast = (i: number, array: ArrayLike<any>): boolean => {
  return i != array.length - 1;
}
