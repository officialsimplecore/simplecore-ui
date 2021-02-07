/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter, forwardRef, Inject,
  Input, OnDestroy,
  OnInit, Output, PLATFORM_ID,
  Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {ScrollLockService} from "../_services/scroll-lock.service";
import {Uuid} from "../_static/uuid";
import {CalculateBackgroundColor} from "../_static/calculate-background-color";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

/** Change event object emitted by CoreCheckbox. */
export class CoreCheckboxChange {
  /** The source CoreCheckbox of the event. */
  source: CoreCheckbox;
  /** The new `checked` value of the checkbox. */
  checked: boolean;
}

/**
 * Provider Expression that allows core-checkbox to register as a ControlValueAccessor.
 * This allows it to support the FormsModule and [(ngModel)].
 */
export const CORE_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CoreCheckbox),
  multi: true
};

@Component({
  selector: 'core-checkbox',
  exportAs: 'coreCheckbox',
  template: `
    <span class="checkbox-container">
      <input type="checkbox"
             #inputElement
             [id]="inputId"
             [required]="required"
             [checked]="checked"
             [attr.value]="value"
             [disabled]="disabled"
             [attr.name]="name"
             [tabIndex]="tabIndex"
             [attr.aria-label]="ariaLabel || null"
             [attr.aria-labelledby]="ariaLabelledby"
             [attr.aria-checked]="getAriaChecked()"
             [attr.aria-describedby]="ariaDescribedby"
             (click)="onInputClick($event)"/>
      <label #labelElement [for]="inputId" class="animated-checkbox"></label>
      <label class="checkbox-label" [for]="inputId"><ng-content></ng-content></label>
    </span>
  `,
  styleUrls: ['checkbox.scss'],
  inputs: ['color', 'tabIndex'],
  providers: [CORE_CHECKBOX_CONTROL_VALUE_ACCESSOR]
})
export class CoreCheckbox implements AfterViewInit {
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  @Input('aria-label') ariaLabel: string = '';

  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  @Input('aria-labelledby') ariaLabelledby: string | null = null;

  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  @Input('aria-describedby') ariaDescribedby: string;

  private _uniqueId: string = `core-checkbox-${Uuid.getUuidNumber()}`;

  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  @Input() id: string = this._uniqueId;

  /** Returns the unique id for the visual hidden input. */
  get inputId(): string { return `${this.id || this._uniqueId}-input`; }

  /** Whether the checkbox is required. */
  @Input() required: boolean;

  /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
  @Input() labelPosition: 'before' | 'after' = 'after';

  /** Name value will be applied to the input element if present */
  @Input() name: string | null = null;

  /** Event emitted when the checkbox's `checked` value changes. */
  @Output() readonly change: EventEmitter<CoreCheckboxChange> =
    new EventEmitter<CoreCheckboxChange>();

  /** Event emitted when the checkbox's `indeterminate` value changes. */
  @Output() readonly indeterminateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** The value attribute of the native input element */
  @Input() value: string;

  /** Tab index */
  @Input() tabIndex: number;

  /**
   * Whether the checkbox is checked.
   */
  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();

    }

  }
  private _checked: boolean = false;

  /**
   * Whether the checkbox is disabled. This fully overrides the implementation provided by
   * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
   */
  @Input()
  get disabled() { return this._disabled; }
  set disabled(value: any) {
    const newValue = value != null && `${value}` !== 'false';

    if (newValue !== this.disabled) {
      this._disabled = newValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  private _disabled: boolean = false;

  @Input() checkboxSize: string = "15px"

  @Input() backgroundColor: string = "";


  @ViewChild('labelElement') labelElement: ElementRef;
  @ViewChild('inputElement') _inputElement: ElementRef;

  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   */
  _onTouched: () => any = () => {};

  private _controlValueAccessorChangeFn: (value: any) => void = () => {};

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.labelElement.nativeElement.style.setProperty('--core-checkbox-size', this.checkboxSize);
    if (this.backgroundColor === "") {
      this.backgroundColor = CalculateBackgroundColor.findElementBackground(this.labelElement.nativeElement);
    }
    this.labelElement.nativeElement.style.setProperty('--core-checkbox-background', this.backgroundColor);
  }

  getAriaChecked(): 'true' | 'false' {
    if (this.checked) {
      return 'true';
    }
    return 'false'
  }
  onInputClick(event: Event) {
      this.toggle();
      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this._emitChangeEvent();
    this._inputElement.nativeElement.checked = this.checked;
  }

  private _emitChangeEvent() {
    const event = new CoreCheckboxChange();
    event.source = this;
    event.checked = this.checked;

    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(event);
  }

  /** Toggles the `checked` state of the checkbox. */
  public toggle(): void {

    this.checked = !this.checked;

  }

  // Implemented as part of ControlValueAccessor.
  writeValue(value: any) {
    this.checked = !!value;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
