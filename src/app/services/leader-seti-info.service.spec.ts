import { TestBed } from '@angular/core/testing';

import { LeaderSetiInfoService } from './leader-seti-info.service';

describe('LeaderSetiInfoService', () => {
  let service: LeaderSetiInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderSetiInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
