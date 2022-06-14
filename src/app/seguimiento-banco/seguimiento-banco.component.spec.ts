import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoBancoComponent } from './seguimiento-banco.component';

describe('SeguimientoBancoComponent', () => {
  let component: SeguimientoBancoComponent;
  let fixture: ComponentFixture<SeguimientoBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
