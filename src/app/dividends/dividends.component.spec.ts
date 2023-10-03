import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendsComponent } from './dividends.component';

describe('DividendsComponent', () => {
  let component: DividendsComponent;
  let fixture: ComponentFixture<DividendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividendsComponent]
    });
    fixture = TestBed.createComponent(DividendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
