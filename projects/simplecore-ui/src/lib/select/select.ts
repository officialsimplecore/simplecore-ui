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
  encapsulation: ViewEncapsulation.None
})
export class CoreSelect implements OnInit {
  @Input() corePlaceholderText: string = "Select options";

  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    this.toggleLabelFloating();
  }

  private toggleLabelFloating(): void {
    this.element.nativeElement.addEventListener("change", () => {
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
