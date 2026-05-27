import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeatBox } from './ui-seat-box';

describe('UiSeatBox', () => {
  let component: UiSeatBox;
  let fixture: ComponentFixture<UiSeatBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSeatBox],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSeatBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
