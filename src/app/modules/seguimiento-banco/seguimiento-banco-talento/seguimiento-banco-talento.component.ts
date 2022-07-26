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

  id = new FormControl(1)
  opme_habilidadBlanda = new FormControl('')
  opme_habilidadTecnica = new FormControl('')
  reco_habilidadTecnica = new FormControl('')
  reco_habilidadBlanda = new FormControl('')


  seguimientoBancoTalentoForm = new FormGroup({
    tale_id: this.id,
    competencias: new FormArray ([
    ]),
    opme_habilidadblanda: this.opme_habilidadBlanda,
    opme_habilidadtecnica: this.opme_habilidadTecnica,
    reco_habilidadblanda: this.reco_habilidadBlanda,
    reco_habilidadtecnica: this.reco_habilidadTecnica
  })

  constructor(private seguimientoTalentoBancoService: SeguimientoTalentoBancoService, public fb: FormBuilder) {
    this.obtenerCompetencias();
  }

  get competenciasForm() {
    return this.seguimientoBancoTalentoForm.get('competencias') as FormArray;
  }

  obtenerCompetencias() {
    this.seguimientoTalentoBancoService.getCompetencias().subscribe(
      (response: any) => {
        this.asignarCompetencias(response.data);
      }
    );
  }

  asignarCompetencias(competencias: any[]) {
    competencias.forEach(competencia => {
      this.competenciasForm.push(
        this.fb.group({
            tico_id: [competencia.tico_id],
            nombre: [competencia.tico_nombre],
            valor: [null, Validators.required]
          }
        )
      );
    });
  }

  seguimientoBancoTalento() {
      if (this.seguimientoBancoTalentoForm.invalid) {
        return;
      }
      this.inSubmission = true;
      this.seguimientoTalentoBancoService.seguimientoBanco(this.seguimientoBancoTalentoForm.value)
      console.log(this.seguimientoBancoTalentoForm.value)
  }
}
