/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button';

@NgModule({
  declarations: [ButtonDirective],
  imports: [
    CommonModule
  ],
  exports:[ButtonDirective]
})
export class CoreButtonModule { }
