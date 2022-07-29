import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoSeguimientoComponent } from './ultimo-seguimiento.component';

describe('UltimoSeguimientoComponent', () => {
  let component: UltimoSeguimientoComponent;
  let fixture: ComponentFixture<UltimoSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
