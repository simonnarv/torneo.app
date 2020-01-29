import { TestBed } from '@angular/core/testing';

import { ScoresheetService } from '../scoresheet.service';

describe('ScoresheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoresheetService = TestBed.get(ScoresheetService);
    expect(service).toBeTruthy();
  });
});
