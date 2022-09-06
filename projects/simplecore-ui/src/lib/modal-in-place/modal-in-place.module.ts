import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { ModalInPlace } from './modal-in-place';
import { ModalToggleDirective } from './modal-toggle.directive';
import {A11yModule} from "@angular/cdk/a11y";

@NgModule({
  declarations: [ModalInPlace, ModalToggleDirective],
  imports: [
    OverlayModule,
    A11yModule
  ],
  exports: [ModalInPlace, ModalToggleDirective]
})
export class CoreModalInPlaceModule { }
