/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PressableDirective} from './pressable';

@NgModule({
  declarations: [PressableDirective],
  imports: [
    CommonModule
  ],
  exports:[PressableDirective]
})
export class CorePressableModule { }
