import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'button[coreButton]',
  exportAs: 'coreButton',
  template: '<ng-content></ng-content>',
  styleUrls: ['button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDirective implements OnInit {
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    this.element.nativeElement.classList.add("core-button");
  }
}
