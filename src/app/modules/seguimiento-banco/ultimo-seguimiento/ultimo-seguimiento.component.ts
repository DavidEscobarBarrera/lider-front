import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, tap} from 'rxjs';
import { SeguimientoTalentoBancoService} from '../../../services/seguimiento-talento-banco.service';



@Component({
  selector: 'app-ultimo-seguimiento',
  templateUrl: './ultimo-seguimiento.component.html',
  styleUrls: ['./ultimo-seguimiento.component.scss']
})
export class UltimoSeguimientoComponent implements OnInit {
  form!: FormGroup;
  data!: Observable<any>;

  constructor(private seguimientoTalentoService: SeguimientoTalentoBancoService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      reco_habilidadblanda: [''],
      reco_habilidadtecnica: [''],
      opme_habilidadblanda: [''],
      opme_habilidadtecnica: [''],
    })

    this.data = this.seguimientoTalentoService.loadSeguimiento()
      .pipe(
        tap(data => this.form.patchValue(data))
      )
  }

  submit() {

  }
}
