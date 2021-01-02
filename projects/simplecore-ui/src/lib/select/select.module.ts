/**
 * @license
 * Copyright 2020 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreSelect, CoreSelectLabel} from './select';

@NgModule({
  declarations: [CoreSelect,CoreSelectLabel],
  imports: [
    CommonModule
  ],
  exports:[CoreSelect,CoreSelectLabel]
})
export class CoreSelectModule { }
