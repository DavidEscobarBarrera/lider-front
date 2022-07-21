import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccionMejoraService} from '../services/accion-mejora.service';

@Component({
  selector: 'app-registrar-accion-mejora',
  templateUrl: './registrar-accion-mejora.component.html',
  styleUrls: ['./registrar-accion-mejora.component.scss']
})
export class RegistrarAccionMejoraComponent {
  fecha: Date = new Date;
  success = false;
  inSubmission = false;
  username = 'Andrés García';

  constructor(private accionMejoraService: AccionMejoraService) {
  }

  tale_id = new FormControl(251);

  acme_accion = new FormControl('', [Validators.required]);

  acme_actividad = new FormControl('', [Validators.required]);

  acme_estado = new FormControl('', [Validators.required]);

  acme_fechafin = new FormControl('', [Validators.required]);

  acme_observaciones = new FormControl('');

  acme_registradopor = new FormControl(13);

  accionMejoraForm = new FormGroup(
    {
      tale_id: this.tale_id,
      acme_accion: this.acme_accion,
      acme_actividad: this.acme_actividad,
      acme_estado: this.acme_estado,
      acme_fechafin: this.acme_fechafin,
      acme_observaciones: this.acme_observaciones,
      acme_registradopor: this.acme_registradopor
    }
  );

  accionMejora() {
    if (this.accionMejoraForm.invalid) {
      return;
    }
    this.inSubmission = true
    this.accionMejoraService.createAction(this.accionMejoraForm.value)
      .subscribe({
          next: () => this.success = true,
          complete: () => setTimeout(() => this.success = false, 5000)
        }
      );
  }

  cancel() {
    this.accionMejoraForm.reset()
  }
}
