import { TestBed } from '@angular/core/testing';

import { AccionMejoraService } from './accion-mejora.service';

describe('AccionMejoraService', () => {
  let service: AccionMejoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccionMejoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
