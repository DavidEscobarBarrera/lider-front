import {Component, OnInit} from '@angular/core';
import {Observable, shareReplay, tap} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SeguimientoTalentoBancoService} from '../../../services/seguimiento-talento-banco.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-ultimo-seguimiento',
  templateUrl: './ultimo-seguimiento.component.html',
  styleUrls: ['./ultimo-seguimiento.component.scss']
})
export class UltimoSeguimientoComponent implements OnInit {
  form!: FormGroup;
  data!: Observable<any>;
  talentInfo!: Observable<any>;
  tale_id: any;

  constructor(private seguimientoTalentoService: SeguimientoTalentoBancoService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.tale_id = value.get('id'));
    this.talentInfo = this.seguimientoTalentoService.getTalentInfoById(this.tale_id);
    this.form = this.fb.group({
      reco_habilidadblanda: [''],
      reco_habilidadtecnica: [''],
      opme_habilidadblanda: [''],
      opme_habilidadtecnica: ['']
    })

    this.data = this.seguimientoTalentoService.loadLastEvaluation(this.tale_id)
      .pipe(
        tap(data => this.form.patchValue(data)),
        shareReplay()
      )
  }

  back(): void {
    this.location.back()
  }

  submit() {
    console.log(this.form.value)
  }
}
