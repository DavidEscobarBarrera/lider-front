import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import {SeguimientoTalentoBancoService} from '../../../services/seguimiento-talento-banco.service';
import {ActivatedRoute} from '@angular/router';
import {SetiLeaderInfoService} from '../../../services/seti-leader-info.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-seguimiento-banco-talento',
  templateUrl: './seguimiento-banco-talento.component.html',
  styleUrls: ['./seguimiento-banco-talento.component.scss']
})
export class SeguimientoBancoTalentoComponent implements OnInit {
  fecha: Date = new Date;
  inSubmission = false;
  seguimientoBancoTalentoForm!: FormGroup;
  tale: any;
  pusua_id!: number;
  talentInfo!: Observable<any>;

  opme_habilidadBlanda = new FormControl('');
  opme_habilidadTecnica = new FormControl('');
  reco_habilidadTecnica = new FormControl('');
  reco_habilidadBlanda = new FormControl('');

  constructor(private seguimientoTalentoBancoService: SeguimientoTalentoBancoService,
              public fb: FormBuilder,
              private route: ActivatedRoute,
              private setiLeaderService: SetiLeaderInfoService,
              private location: Location) {
    this.obtenerCompetencias();
  }

  ngOnInit() {
    this.pusua_id = this.setiLeaderService.userData.pusua_id;
    this.route.paramMap.subscribe(value => this.tale = value.get('id'));
    this.talentInfo = this.seguimientoTalentoBancoService.getTalentInfoById(this.tale);
    this.seguimientoBancoTalentoForm = new FormGroup({
      tale_id: new FormControl(this.tale),
      competencias: new FormArray([]),
      opme_habilidadblanda: this.opme_habilidadBlanda,
      opme_habilidadtecnica: this.opme_habilidadTecnica,
      reco_habilidadblanda: this.reco_habilidadBlanda,
      reco_habilidadtecnica: this.reco_habilidadTecnica
    })
  }

  get competenciasForm() {
    return this.seguimientoBancoTalentoForm.get('competencias') as FormArray;
  }

  obtenerCompetencias() {
    this.seguimientoTalentoBancoService.getCompetencias()
      .subscribe((response: any) => {
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
            valor: [null, [Validators.required, Validators.min(1)]]
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
    this.seguimientoTalentoBancoService.seguimientoBanco(this.seguimientoBancoTalentoForm.value, this.pusua_id)
      .subscribe({
        next: () => this.location.back(),
        error: err => console.log(err)
      })
  }
}
