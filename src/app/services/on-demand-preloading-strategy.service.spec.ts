import { TestBed } from '@angular/core/testing';

import { OnDemandPreloadingStrategyService } from './on-demand-preloading-strategy.service';

describe('OnDemandPreloadingStrategyService', () => {
  let service: OnDemandPreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDemandPreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
