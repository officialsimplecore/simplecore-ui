/**
 * @license
 * Copyright 2021 SimpleCore All Rights Reserved.
 *
 * Use of this source code is governed private licensing for
 * internal SimpleCore projects
 */

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CoreModal} from "simplecore-ui";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  // Access modal to close it
  @ViewChild('modal') modal: CoreModal;

  // Access form element in template for values
  @ViewChild('form') form: HTMLFormElement;

  public modalOpen: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
  }

  public submitIt() {
    this.modal.toggleModal(false);
    this.logForm();
    this.form.reset();
  }

  // Not that submission
  private logForm() {
    console.log(this.form.value);
  }


}
