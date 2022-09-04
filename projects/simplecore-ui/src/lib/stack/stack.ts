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
  @Input() marginSize: "small" | "medium" | "large" | "none" = "medium";
  @Input() alignItems: "start" | "center" | "end" | "stretch" = "start";

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {

    this.renderer.setStyle(this.vStack.nativeElement, "align-items", `${this.alignItems}`);

    if (this.overrideMarginSize === undefined) {
      RendererExtensions.addStyleToChildren(this.renderer, this.vStack.nativeElement, "margin-bottom", `var(--core-stack-margin-${this.marginSize})`, avoidLast);
    } else {
      RendererExtensions.addStyleToChildren(this.renderer, this.vStack.nativeElement, "margin-bottom", `${this.overrideMarginSize}px`, avoidLast);
    }
  }
}

@Component({
  selector: 'core-hstack',
  exportAs: 'coreHStack',
  template: `<div #hStack [class.core-hstack-wrap]="wrap" [class.core-hstack]="!wrap"><ng-content></ng-content></div>`,
  styleUrls: ['stack.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoreHStack implements AfterViewInit {
  // IO
  @ViewChild('hStack') hStack: ElementRef;
  @Input() overrideMarginSize: number | undefined;
  @Input() marginSize: "small" | "medium" | "large" | "none" = "medium";
  @Input() wrap: boolean;
  @Input() alignItems: "start" | "center" | "end" | "stretch" = "start";

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.hStack.nativeElement, "align-items", `${this.alignItems}`);

    if (this.overrideMarginSize === undefined) {
      RendererExtensions.addStyleToChildren(this.renderer, this.hStack.nativeElement, "margin-right", `var(--core-stack-margin-${this.marginSize})`, avoidLast);
    } else {
      RendererExtensions.addStyleToChildren(this.renderer, this.hStack.nativeElement, "margin-right", `${this.overrideMarginSize}px`, avoidLast);
    }
  }
}

export const avoidLast = (i: number, array: ArrayLike<any>): boolean => {
  return i != array.length - 1;
}
