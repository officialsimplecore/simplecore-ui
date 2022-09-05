import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import {startOfDay, toISODateString} from "../../../../simplecore-ui/src/lib/datepicker/date-utils";


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent {

  // EX: time = '13:43:52'
  public combineDateAndTime(date: Date, time: string): Date {
    if (date == null || time == null) {
      return;
    }
    console.log(date, time)

    const timeSplit = time.split(':');
    date.setHours(parseInt(timeSplit[0]));
    date.setMinutes(parseInt(timeSplit[1]));
    if (timeSplit[2]) {
      date.setSeconds(parseInt(timeSplit[2]));
    }
    return date;
  }


  public readonly today = startOfDay(new Date());

  firstDayOfWeekControl = new FormControl('');
  localeControl = new FormControl('');
  minControl = new FormControl(new Date());
  highControl = new FormControl(new Date());
  dateControl = new FormControl();
  datepickerControl = new FormControl();
  timePickerControl = new FormControl();
  disabledControl = new FormControl(false);
  numberOfMonthsControl = new FormControl(1);
  monthAndYearFormatControl = new FormControl();
  firstMonthControl = new FormControl();

  demoFormGroup = new FormGroup({
    firstDayOfWeek: this.firstDayOfWeekControl,
    locale: this.localeControl,
    min: this.minControl,
    high: this.highControl,
    date: this.dateControl,
    disabled: this.disabledControl,
    numberOfMonths: this.numberOfMonthsControl,
    monthAndYearFormat: this.monthAndYearFormatControl,
    firstMonth: this.firstMonthControl,
  });

  minDate$ = this.minControl.valueChanges.pipe(
    startWith(this.minControl.value),
    distinctUntilChanged(),
    map(isoDate => startOfDay(new Date(isoDate)))
  );

  firstMonth$ = this.firstMonthControl.valueChanges.pipe(
    distinctUntilChanged(),
    map(isoDate => new Date(isoDate))
  );

  constructor() {
    this.disabledControl.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(disabled => {
      if (disabled) {
        this.dateControl.disable();
      } else {
        this.dateControl.enable();
      }
    });
  }

  selectToday() {
    this.dateControl.setValue(this.today);
  }
}
