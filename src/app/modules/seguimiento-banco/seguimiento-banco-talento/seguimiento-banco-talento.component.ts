import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SeguimientoTalentoBancoService} from "../../../services/seguimiento-talento-banco.service";

@Component({
  selector: 'app-seguimiento-banco-talento',
  templateUrl: './seguimiento-banco-talento.component.html',
  styleUrls: ['./seguimiento-banco-talento.component.scss']
})
export class SeguimientoBancoTalentoComponent {
  fecha: Date = new Date;
  inSubmission = false;

  constructor(private seguimientoTalentoBancoService: SeguimientoTalentoBancoService) {}

  id = new FormControl(6)
  comunicacion = new FormControl(null, [Validators.required, Validators.min(1)])
  trabajoEnEquipo = new FormControl(null, [Validators.required, Validators.min(1)])
  orientacionAlServicio = new FormControl(null, [Validators.required, Validators.min(1)])
  orientacionAlLogro = new FormControl(null, [Validators.required, Validators.min(1)])
  conocimientoTecnico = new FormControl(null, [Validators.required, Validators.min(1)])
  opme_habilidadBlanda = new FormControl('')
  opme_habilidadTecnica = new FormControl('')
  reco_habilidadTecnica = new FormControl('')
  reco_habilidadBlanda = new FormControl('')

  seguimientoBancoTalentoForm = new FormGroup({
    tale_id: this.id,
    comp_comunicacion: this.comunicacion,
    comp_trabajoenequipo: this.trabajoEnEquipo,
    comp_orientacionalservicio: this.orientacionAlServicio,
    comp_orientacionallogro: this.orientacionAlLogro,
    comp_conocimientotecnico: this.conocimientoTecnico,
    opme_habilidadblanda: this.opme_habilidadBlanda,
    opme_habilidadtecnica: this.opme_habilidadTecnica,
    reco_habilidadblanda: this.reco_habilidadTecnica,
    reco_habilidadtecnica: this.reco_habilidadBlanda
  })

  seguimientoBancoTalento() {
    if (this.seguimientoBancoTalentoForm.invalid) {
      return;
    }
    this.inSubmission = true;
    this.seguimientoTalentoBancoService.seguimientoBanco(this.seguimientoBancoTalentoForm.value)
  }
}
