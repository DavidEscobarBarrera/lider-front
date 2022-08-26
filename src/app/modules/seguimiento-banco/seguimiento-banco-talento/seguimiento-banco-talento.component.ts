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
  tale_id: any;
  usuaid!: number;
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
    this.usuaid = this.setiLeaderService.userData.usuaid;
    this.route.paramMap.subscribe(value => this.tale_id = value.get('id'));
    this.talentInfo = this.seguimientoTalentoBancoService.getTalentInfoById(this.tale_id);
    this.seguimientoBancoTalentoForm = new FormGroup({
      talid: new FormControl(this.tale_id),
      competencias: new FormArray([]),
      opmhabbland: this.opme_habilidadBlanda,
      opmhabtecni: this.opme_habilidadTecnica,
      rechabbladn: this.reco_habilidadBlanda,
      rechabtecni: this.reco_habilidadTecnica
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
            ticoid: [competencia.ticoid],
            nombre: [competencia.ticonombre],
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
    this.seguimientoTalentoBancoService.seguimientoBanco(this.seguimientoBancoTalentoForm.value, this.usuaid)
      .subscribe({
        next: () => this.location.back()
      })
  }
}
