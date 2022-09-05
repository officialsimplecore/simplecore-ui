import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

import { ModalInPlace } from './modal-in-place';

@Directive({
  selector: '[coreModalInPlaceToggle]'
})
export class ModalToggleDirective extends CdkOverlayOrigin implements AfterViewInit {
  @Input() modal!: ModalInPlace;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  ngAfterViewInit() {
    this.modal.overlayOrigin = this;
  }

  @HostListener('click') toggleOverLay() {
    this.modal.toggleOverlay();
  }
}
