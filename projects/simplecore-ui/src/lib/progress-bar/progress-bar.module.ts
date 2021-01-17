/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreProgressBar} from "./progress-bar";

@NgModule({
  declarations: [CoreProgressBar],
  imports: [
    CommonModule
  ],
  exports: [CoreProgressBar]
})
export class CoreProgressBarModule { }
