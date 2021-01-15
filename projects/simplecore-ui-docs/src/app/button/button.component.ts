import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button size="sm" coreButton>Small</button>
    <button size="md" coreButton>Medium</button>
    <button size="lg" coreButton>Large</button>

    <button themeColor="secondary" size="sm" coreButton>Small</button>
    <button themeColor="transparent" size="md" coreButton>Medium</button>

    <button size="lg" corePressable coreButton>Large with Core Pressable</button>
    <button size="md" corePressable coreButton>Large with Core Pressable</button>
    <button size="sm" corePressable coreButton>Smallest</button>

  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
