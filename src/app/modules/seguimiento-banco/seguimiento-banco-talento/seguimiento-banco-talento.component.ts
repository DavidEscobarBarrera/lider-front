import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SeguimientoTalentoBancoService, seguimiento } from '../../../services/seguimiento-talento-banco.service';

@Component({
  selector: 'app-seguimiento-banco-talento',
  templateUrl: './seguimiento-banco-talento.component.html',
  styleUrls: ['./seguimiento-banco-talento.component.scss']
})
export class SeguimientoBancoTalentoComponent {
  fecha: Date = new Date;
  inSubmission = false;

  constructor(private seguimientoTalentoBancoService: SeguimientoTalentoBancoService) {}

  id = new FormControl(251)
  comunicacion = new FormControl(null, [Validators.required, Validators.min(1)])
  trabajoEnEquipo = new FormControl(null, [Validators.required, Validators.min(1)])
  orientacionAlServicio = new FormControl(null, [Validators.required, Validators.min(1)])
  orientacionAlLogro = new FormControl(null, [Validators.required, Validators.min(1)])
  conocimientoTecnico = new FormControl(null, [Validators.required, Validators.min(1)])
  opme_habilidadBlanda = new FormControl('')
  opme_habilidadTecnica = new FormControl('')
  reco_habilidadTecnica = new FormControl('')
  reco_habilidadBlanda = new FormControl('')

  competencia1 = new FormControl (1)
  competencia2 = new FormControl (2)
  competencia3 = new FormControl (3)
  competencia4 = new FormControl (4)
  competencia5 = new FormControl (5)

  seguimientoBancoTalentoForm = new FormGroup({
    tale_id: this.id,
    competencias: new FormArray ([
      new FormGroup ({tico_id : this.competencia1 ,valor: this.comunicacion}) ,
      new FormGroup ({tico_id : this.competencia2 , valor: this.trabajoEnEquipo}) ,
      new FormGroup ({tico_id : this.competencia3 , valor: this.orientacionAlServicio}) ,
      new FormGroup ({tico_id : this.competencia4 , valor: this.orientacionAlLogro}) ,
      new FormGroup ({tico_id : this.competencia5 , valor: this.conocimientoTecnico})
    ]),
    opme_habilidadblanda: this.opme_habilidadBlanda,
    opme_habilidadtecnica: this.opme_habilidadTecnica,
    reco_habilidadblanda: this.reco_habilidadBlanda,
    reco_habilidadtecnica: this.reco_habilidadTecnica
  })




  seguimientoBancoTalento() {
      if (this.seguimientoBancoTalentoForm.invalid) {
        return;
      }
      this.inSubmission = true;
      this.seguimientoTalentoBancoService.seguimientoBanco(this.seguimientoBancoTalentoForm.value)
      console.log(this.seguimientoBancoTalentoForm.value)

  }
}
