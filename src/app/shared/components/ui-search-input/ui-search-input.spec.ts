import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchInput } from './ui-search-input';

describe('UiSearchInput', () => {
  let component: UiSearchInput;
  let fixture: ComponentFixture<UiSearchInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSearchInput],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSearchInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
