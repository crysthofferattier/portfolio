import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPositionPerAssetComponent } from './market-position-per-asset.component';

describe('MarketPositionPerAssetComponent', () => {
  let component: MarketPositionPerAssetComponent;
  let fixture: ComponentFixture<MarketPositionPerAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketPositionPerAssetComponent]
    });
    fixture = TestBed.createComponent(MarketPositionPerAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
