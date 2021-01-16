import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @ViewChild('form') form: HTMLFormElement;

  constructor() { }

  ngOnInit(): void {
  }

  logForm(value: any) {
    console.log(value);
    this.form.reset();
  }
}
