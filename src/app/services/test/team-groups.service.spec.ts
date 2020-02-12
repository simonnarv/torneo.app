import { TestBed } from '@angular/core/testing';

import { TeamGroupsService } from '../groups.service';

describe('TeamGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamGroupsService = TestBed.get(TeamGroupsService);
    expect(service).toBeTruthy();
  });
});
