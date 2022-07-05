import { TestBed } from '@angular/core/testing';

import { OnDemandLoadService } from './on-demand-load.service';

describe('OnDemandLoadService', () => {
  let service: OnDemandLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDemandLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
