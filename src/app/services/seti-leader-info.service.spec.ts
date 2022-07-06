import { TestBed } from '@angular/core/testing';

import { SetiLeaderInfoService } from './seti-leader-info.service';

describe('SetiLeaderInfoService', () => {
  let service: SetiLeaderInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetiLeaderInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
