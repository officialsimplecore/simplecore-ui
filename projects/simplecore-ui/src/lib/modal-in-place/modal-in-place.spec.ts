import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { ModalInPlace } from './modal-in-place';

describe('ModalComponent', () => {
  let component: ModalInPlace;
  let fixture: ComponentFixture<ModalInPlace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        OverlayModule,
        A11yModule
      ],
      declarations: [ ModalInPlace ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInPlace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
