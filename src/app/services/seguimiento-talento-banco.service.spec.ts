import { TestBed } from '@angular/core/testing';

import { SeguimientoTalentoBancoService } from './seguimiento-talento-banco.service';

describe('SeguimientoTalentoBancoService', () => {
  let service: SeguimientoTalentoBancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientoTalentoBancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
