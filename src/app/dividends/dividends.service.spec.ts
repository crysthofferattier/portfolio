import { TestBed } from '@angular/core/testing';

import { DividendsService } from './dividends.service';

describe('DividendsService', () => {
  let service: DividendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DividendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
