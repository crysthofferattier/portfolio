import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDividendsPerTypeComponent } from './monthly-dividends-per-type.component';

describe('MonthlyDividendsPerTypeComponent', () => {
  let component: MonthlyDividendsPerTypeComponent;
  let fixture: ComponentFixture<MonthlyDividendsPerTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDividendsPerTypeComponent]
    });
    fixture = TestBed.createComponent(MonthlyDividendsPerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
