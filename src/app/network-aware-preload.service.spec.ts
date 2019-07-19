import { TestBed } from '@angular/core/testing';

import { NetworkAwarePreloadService } from './network-aware-preload.service';

describe('NetworkAwarePreloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkAwarePreloadService = TestBed.get(NetworkAwarePreloadService);
    expect(service).toBeTruthy();
  });
});
