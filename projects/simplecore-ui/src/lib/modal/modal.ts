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
  selector: 'core-modal',
  exportAs: 'coreModal',
  template: `
    <div class="modal__container">
        <div>
            <ng-content></ng-content>
        </div>
    </div>`,
  styleUrls: ['modal.scss']
})
export class CoreModal implements OnInit {
  ngOnInit(): void {
  }
}
