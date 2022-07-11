import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoBancoTalentoComponent } from './seguimiento-banco-talento.component';

describe('SeguimientoBancoTalentoComponent', () => {
  let component: SeguimientoBancoTalentoComponent;
  let fixture: ComponentFixture<SeguimientoBancoTalentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoBancoTalentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoBancoTalentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
