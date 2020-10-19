import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecoreUiComponent } from './simplecore-ui.component';

describe('SimplecoreUiComponent', () => {
  let component: SimplecoreUiComponent;
  let fixture: ComponentFixture<SimplecoreUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplecoreUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplecoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
