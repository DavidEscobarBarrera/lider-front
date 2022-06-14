import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAccionMejoraComponent } from './registrar-accion-mejora.component';

describe('RegistrarAccionMejoraComponent', () => {
  let component: RegistrarAccionMejoraComponent;
  let fixture: ComponentFixture<RegistrarAccionMejoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAccionMejoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAccionMejoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
