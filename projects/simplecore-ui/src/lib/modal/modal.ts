/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter, Inject,
  Input,
  OnInit, Output, PLATFORM_ID,
  Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'core-modal',
  exportAs: 'coreModal',
  template: `
    <div class="modal__container" #modalElement *ngIf="open">
      <div class="modal" coreClickOutside (onClickOutside)="toggleModal(false)">
        <div class="title" *ngIf="title">
          <h2><ng-content select="span[coreModalTitle]"></ng-content></h2>
        </div>
        <div class="content">
          <ng-content></ng-content>
        </div>
        <div class="action" *ngIf="action">
          <span>
            <ng-content select="span[coreModalActionPrimary]"></ng-content>
          </span>
          <span>
            <ng-content select="span[coreModalActionSecondary]"></ng-content>
          </span>
        </div>
      </div>
    </div>`,
  styleUrls: ['modal.scss']
})
export class CoreModal implements AfterViewInit {
  @Input() open: boolean = false;
  private isOpening: boolean = false;

  @Input() action: boolean = false;
  @Input() title: boolean = false;
  @Input() actionPrimary: boolean = true;
  @Input() actionSecondary: boolean = true;

  @Output() primaryButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  @Output() secondaryButtonPressed: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('modalElement') modalElement: ElementRef | undefined;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  ngAfterViewInit(): void {
    this.toggleModal(this.open);
  }

  public toggleModal(on: boolean): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (!on && !this.isOpening) {
      this.open = false;
      // this.closeModal();
    } else if (on) {
      this.isOpening = true;
      this.open = true;

      // Delay
      setTimeout(() => {
        this.isOpening = false;
      }, 10)
    }
  }

  private openModal(): void {
    this.renderer.setStyle(this.modalElement.nativeElement, "display", "flex");
  }

  private closeModal(): void {
    this.renderer.setStyle(this.modalElement.nativeElement, "display", "none");
  }
}
