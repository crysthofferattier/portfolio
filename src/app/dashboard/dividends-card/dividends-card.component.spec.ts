import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendsCardComponent } from './dividends-card.component';

describe('DividendsCardComponent', () => {
  let component: DividendsCardComponent;
  let fixture: ComponentFixture<DividendsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendsCardComponent]
    });
    fixture = TestBed.createComponent(DividendsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
