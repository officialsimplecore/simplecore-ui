/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
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
  selector: 'select[coreSelect]',
  exportAs: 'coreSelect',
  template: '<div class="core-select-arrow"><svg viewBox="0 0 24 24" role="presentation" class="chakra-select__icon" focusable="false" aria-hidden="true" style="width: 1em; height: 1em; color: currentcolor;"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><option class="core-select__placeholder-option" value="" disabled selected>{{corePlaceholderText}}</option><ng-content></ng-content>',
  styleUrls: ['select.scss'],
  host: {
    'class': 'core-select',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CoreSelect implements OnInit {
  @Input() corePlaceholderText: string = "Select options";
  @Input() colorOverride: string | undefined;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }
  ngOnInit(): void {
    this.toggleLabelFloating();
    this.checkForReset();
    this.overrideBackgroundColor();
  }

  private toggleLabelFloating(): void {
    this.element.nativeElement.addEventListener("valueChange", () => {
      console.log("Check")
      const floatingLabelElement = this.element.nativeElement.nextElementSibling;
      if (!!floatingLabelElement) {
        const placeholderOptionElement = this.element.nativeElement.children[0];
        if (!placeholderOptionElement.selected) {
          floatingLabelElement.classList.add("core-select-label__floating");
        } else {
          floatingLabelElement.classList.remove("core-select-label__floating");
        }
      }
    });
    this.element.nativeElement.addEventListener("mouseleave", () => {
      console.log("Check")
      const floatingLabelElement = this.element.nativeElement.nextElementSibling;
      if (!!floatingLabelElement) {
        const placeholderOptionElement = this.element.nativeElement.children[0];
        if (!placeholderOptionElement.selected) {
          floatingLabelElement.classList.add("core-select-label__floating");
        } else {
          floatingLabelElement.classList.remove("core-select-label__floating");
        }
      }
    });
  }

  private checkForReset(): void {
    const floatingLabelElement = this.element.nativeElement.nextElementSibling;
    this.element.nativeElement.addEventListener("clear", () => {
      floatingLabelElement.classList.remove("core-select-label__floating");
    });
  }

  private overrideBackgroundColor(): void {
    if (this.colorOverride) {
      this.renderer.setStyle(this.element.nativeElement, "background-color", `#${this.colorOverride}`);
      this.renderer.setStyle(this.element.nativeElement.nextElementSibling, "background-color", `#${this.colorOverride}`);
    }
  }
}

@Component({
  selector: 'label[coreSelectLabel]',
  exportAs: 'coreSelectLabel',
  template: '<ng-content></ng-content>',
  styleUrls: ['select.scss'],
  host: {
    'class': 'core-select-label',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreSelectLabel implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
