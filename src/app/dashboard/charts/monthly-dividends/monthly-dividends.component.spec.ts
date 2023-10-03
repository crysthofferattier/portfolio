import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDividendsComponent } from './monthly-dividends.component';

describe('MonthlyDividendsComponent', () => {
  let component: MonthlyDividendsComponent;
  let fixture: ComponentFixture<MonthlyDividendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDividendsComponent]
    });
    fixture = TestBed.createComponent(MonthlyDividendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
