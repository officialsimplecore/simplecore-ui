/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModal} from "./modal";
import {CoreClickOutsideModule} from "../_directives/click-outside";

@NgModule({
  declarations: [CoreModal],
  imports: [
    CommonModule,
    CoreClickOutsideModule
  ],
  exports: [CoreModal]
})
export class CoreModalModule { }
