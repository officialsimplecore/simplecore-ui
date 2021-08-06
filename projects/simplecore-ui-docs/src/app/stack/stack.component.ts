import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  template: `
    <strong>Test Vstack</strong>
    <core-vstack>
      <div style="background-color: red">Test item 1 vertical</div>
      <div style="background-color: blue">Test item 2 vertical</div>
      <div style="background-color: yellow">Test item 3 vertical</div>
      <div>Test item 4 vertical</div>
    </core-vstack>

    <br>
    <strong>Test HStack</strong>

    <core-hstack>

      <div style="background-color: red;">Test item 1 vertical</div>
      <div style="background-color: blue">Test item 2 vertical</div>
      <div style="background-color: yellow">Test item 3 vertical</div>
      <div>Test item 4 vertical</div>
    </core-hstack>
    <br>
    <strong>Test HStack with wrap</strong>

    <core-hstack [wrap]="true">

      <div style="background-color: red; width: 100px">Test item 1 vertical</div>
      <div style="background-color: blue; width: 400px">Test item 2 vertical</div>
      <div style="background-color: yellow">Test item 3 vertical</div>
      <div>Test item 4 vertical</div>
    </core-hstack>
    <br>
    <strong>Test Vstack with H stack inside</strong>
    <core-vstack>
      <div style="background-color: red">Test item 1 vertical</div>
      <div style="background-color: blue">Test item 2 vertical</div>
      <div style="background-color: yellow">Test item 3 vertical</div>
      <div>Test item 4 vertical</div>

      <core-hstack>
        Test HStack
        <div style="background-color: red">Test item 1 vertical</div>
        <div style="background-color: blue">Test item 2 vertical</div>
        <div style="background-color: yellow">Test item 3 vertical</div>
        <div>Test item 4 vertical</div>
      </core-hstack>
    </core-vstack>
    <br>
    <strong>Test Vstack override no margin</strong>
    <core-vstack overrideMarginSize="0">
      <div style="background-color: red">Test item 1 vertical</div>
      <div style="background-color: blue">Test item 2 vertical</div>
      <div style="background-color: yellow">Test item 3 vertical</div>
      <div>Test item 4 vertical</div>
    </core-vstack>
  `,
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
