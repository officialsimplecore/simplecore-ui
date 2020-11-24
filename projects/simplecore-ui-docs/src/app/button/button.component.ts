import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button size="sm" coreButton>Small</button>
    <button size="md" coreButton>Medium</button>
    <button size="lg" coreButton>Large</button>

    <button themeColor="secondary" size="md" coreButton>Small</button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
