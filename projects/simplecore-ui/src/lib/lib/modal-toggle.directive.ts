import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

import { ModalComponent } from './modal.component';
import {element} from "protractor";

@Directive({
  selector: '[libModalToggle]'
})
export class ModalToggleDirective extends CdkOverlayOrigin implements AfterViewInit {
  @Input() modal!: ModalComponent;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  ngAfterViewInit() {
    console.log(this);
    this.modal.overlayOrigin = this;
  }

  @HostListener('click') toggleOverLay() {
    this.modal.toggleOverlay();
  }
}
