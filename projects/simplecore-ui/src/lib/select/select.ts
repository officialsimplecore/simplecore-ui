/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  AfterViewInit,
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
  template: '<option class="core-select__placeholder-option" value="" selected>{{corePlaceholderText}}</option><ng-content></ng-content>',
  styleUrls: ['select.scss'],
  host: {
    'class': 'core-select',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreSelect implements OnInit, AfterViewInit {
  @Input() corePlaceholderText: string = "Choose";

  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.element.nativeElement.children[0].selected);
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
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    // this.element.nativeElement.classList.add("core-label");
  }
}
