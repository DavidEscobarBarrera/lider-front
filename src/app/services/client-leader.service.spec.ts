import { TestBed } from '@angular/core/testing';

import { ClientLeaderService } from './client-leader.service';

describe('ClientLeaderService', () => {
  let service: ClientLeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientLeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
