/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";

export type ProgressBarMode = 'determinate' | 'indeterminate';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter, Inject,
  Input,
  OnInit, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'core-progress-bar',
  exportAs: 'coreProgressBar',
  template: `
    <div class="slider">
      <div #mainLine class="line"></div>
      <div #sliderSubLine class="subLine"></div>
      <div #sliderSubLineSecondary *ngIf="progressBarMode === 'indeterminate'" class="subLine decrease"></div>
    </div>
  `,
  styleUrls: ['progress-bar.scss']
})
export class CoreProgressBar implements OnInit, AfterViewInit {
  @Input() color: string | undefined;
  @Input() progressBarMode: ProgressBarMode = 'indeterminate';
  @Input()
  public set value(val: number) {
    this._value = val;
    if (this.viewInitialized) {
      this.setDeterminateProgress(val);
    }
  };
  private _value: number = 0;
  @ViewChild('sliderSubLine') slider: ElementRef;
  @ViewChild('mainLine') mainLine: ElementRef;
  @ViewChild('sliderSubLineSecondary') sliderSecondary: ElementRef;

  private viewInitialized: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // Setup options
    switch (this.progressBarMode) {
      case "determinate":
        this.setDeterminateProgress(this._value);
        break
      default:
        this.renderer.addClass(this.slider.nativeElement, "increase");
        break;
    }

    if (this.color !== undefined) {
      this.renderer.setStyle(this.mainLine.nativeElement, "background-color", `#${this.color}`);
      this.renderer.setStyle(this.sliderSecondary.nativeElement, "background-color", `#${this.color}`);
      this.renderer.setStyle(this.slider.nativeElement, "background-color", `#${this.color}`);
    }

    this.viewInitialized = true;
  }


  private setDeterminateProgress(valuePercentage: number): void {
    this.renderer.setStyle(this.slider.nativeElement, "width", `${valuePercentage}%`);
  }
}
