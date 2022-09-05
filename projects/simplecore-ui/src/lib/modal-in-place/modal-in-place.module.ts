import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { ModalInPlace } from './modal-in-place';
import { ModalToggleDirective } from './modal-toggle.directive';

@NgModule({
  declarations: [ModalInPlace, ModalToggleDirective],
  imports: [
    OverlayModule
  ],
  exports: [ModalInPlace, ModalToggleDirective]
})
export class CoreModalInPlaceModule { }
