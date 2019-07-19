import { TestBed } from '@angular/core/testing';

import { OptInPreloadService } from './opt-in-preload.service';

describe('OptInPreloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptInPreloadService = TestBed.get(OptInPreloadService);
    expect(service).toBeTruthy();
  });
});
