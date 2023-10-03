import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionsPerTypeComponent } from './monthly-transactions-per-type.component';

describe('MonthlyTransactionsPerTypeComponent', () => {
  let component: MonthlyTransactionsPerTypeComponent;
  let fixture: ComponentFixture<MonthlyTransactionsPerTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyTransactionsPerTypeComponent]
    });
    fixture = TestBed.createComponent(MonthlyTransactionsPerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
