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
  ElementRef, Inject,
  Input, OnDestroy,
  OnInit, PLATFORM_ID,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'select[coreSelect]',
  exportAs: 'coreSelect',
  template: '<div class="core-select-arrow"><svg viewBox="0 0 24 24" role="presentation" class="chakra-select__icon" focusable="false" aria-hidden="true" style="width: 1em; height: 1em; color: currentcolor;"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></div><option class="core-select__placeholder-option" value="" disabled selected="selected">{{corePlaceholderText}}</option><ng-content></ng-content>',
  styleUrls: ['select.scss'],
  host: {
    'class': 'core-select',
  },
  encapsulation: ViewEncapsulation.None
})
export class CoreSelect implements OnInit, OnDestroy {
  @Input() corePlaceholderText: string = "Select options";
  @Input() colorOverride: string | undefined;

  private mutationObserver = new MutationObserver(() => {
    this.applyLabelFloat();
  });

  constructor(private renderer: Renderer2,
              private element: ElementRef,
              @Inject(PLATFORM_ID) private readonly platformId: any) {
  }
  ngOnInit(): void {
    this.listenToFloatLabel(); // May be unnecessary but further testing is needed.
    this.overrideBackgroundColor();

    // Only run this if on browser
    if (isPlatformBrowser(this.platformId)) {
      // Create a mutation observer to check for more changes than value changes
      // The default HTML form reset event does not trigger the change event, but does trigger a mutation
      this.mutationObserver.observe(
        this.element.nativeElement,
        { attributes: true }
      );
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // Disconnect from observer on destroy
      this.mutationObserver.disconnect();
    }
  }


  /* Add event listener to for select change to determine if float is needed */
  /* Candidate for deprecation */
  private listenToFloatLabel(): void {
    this.element.nativeElement.addEventListener("change", () => {
      this.applyLabelFloat();
    });
  }

  /* Check if the label should be floating depending on the placeholder element
  *  and change classes if necessary */
  private applyLabelFloat(): void {
    console.log('tset')
    const floatingLabelElement = this.element.nativeElement.nextElementSibling;
    if (!floatingLabelElement) {
      return;
    }

    const placeholderOptionElement = this.element.nativeElement;
    const placeholderSelected = placeholderOptionElement.selectedIndex <= 0;
      // HTML form reset event sets index = -1
      // Placeholder is at index = 0
    if (!placeholderSelected) {
      this.renderer.addClass(floatingLabelElement, "core-select-label__floating");
    } else {
      this.renderer.removeClass(floatingLabelElement, "core-select-label__floating");
    }
  }

  /* Sets input background color  */
  public overrideBackgroundColor(): void {
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
