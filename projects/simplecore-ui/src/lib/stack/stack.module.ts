/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreHStack,CoreVStack} from "./stack";

@NgModule({
  declarations: [CoreVStack, CoreHStack],
  imports: [
    CommonModule
  ],
  exports:[CoreVStack, CoreHStack]
})
export class CoreStackModule { }
