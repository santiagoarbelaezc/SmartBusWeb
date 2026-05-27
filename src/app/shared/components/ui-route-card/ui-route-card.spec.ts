import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRouteCard } from './ui-route-card';

describe('UiRouteCard', () => {
  let component: UiRouteCard;
  let fixture: ComponentFixture<UiRouteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiRouteCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UiRouteCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
