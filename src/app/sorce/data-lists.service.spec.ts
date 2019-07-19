import { TestBed } from '@angular/core/testing';

import { DataListsService } from './data-lists.service';

describe('DataListsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataListsService = TestBed.get(DataListsService);
    expect(service).toBeTruthy();
  });
});
