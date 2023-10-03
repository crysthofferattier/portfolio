import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransactionsComponent } from './monthly-transactions.component';

describe('MonthlyTransactionsComponent', () => {
  let component: MonthlyTransactionsComponent;
  let fixture: ComponentFixture<MonthlyTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyTransactionsComponent]
    });
    fixture = TestBed.createComponent(MonthlyTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
