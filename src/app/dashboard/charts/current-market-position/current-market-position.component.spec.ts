import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMarketPositionComponent } from './current-market-position.component';

describe('CurrentMarketPositionComponent', () => {
  let component: CurrentMarketPositionComponent;
  let fixture: ComponentFixture<CurrentMarketPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentMarketPositionComponent]
    });
    fixture = TestBed.createComponent(CurrentMarketPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
