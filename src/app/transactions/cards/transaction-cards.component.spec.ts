import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCardsComponent } from './transaction-cards.component';

describe('TransactionCardsComponent', () => {
  let component: TransactionCardsComponent;
  let fixture: ComponentFixture<TransactionCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionCardsComponent]
    });
    fixture = TestBed.createComponent(TransactionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
