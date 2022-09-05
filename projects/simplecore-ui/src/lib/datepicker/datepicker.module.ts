import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthComponent } from './month/month.component';
import { DaysOfWeekComponent } from './days-of-week/days-of-week.component';
import { MonthHeaderComponent } from './month-header/month-header.component';
import { MonthAndYearPipe } from './month-and-year/month-and-year.pipe';
import {DatePicker} from "./datepicker";

@NgModule({
  declarations: [
    DatePicker,
    MonthComponent,
    DaysOfWeekComponent,
    MonthHeaderComponent,
    MonthAndYearPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [DatePicker]
})
export class CoreDatePickerModule { }
