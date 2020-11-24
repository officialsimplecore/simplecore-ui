/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreInput, CoreLabel} from './input';

@NgModule({
  declarations: [CoreInput,CoreLabel],
  imports: [
    CommonModule
  ],
  exports:[CoreInput,CoreLabel]
})
export class CoreInputModule { }
