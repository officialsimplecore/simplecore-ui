import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CoreModal} from "simplecore-ui";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @ViewChild(CoreModal) modal: CoreModal;

  public modalOpen: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
  }

  public openModal(): void {
    this.modalOpen = true;
  }
}
