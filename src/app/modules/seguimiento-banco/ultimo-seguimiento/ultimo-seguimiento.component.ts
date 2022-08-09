import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, tap} from 'rxjs';
import { SeguimientoTalentoBancoService} from '../../../services/seguimiento-talento-banco.service';
import { ChartConfiguration } from 'chart.js';



@Component({
  selector: 'app-ultimo-seguimiento',
  templateUrl: './ultimo-seguimiento.component.html',
  styleUrls: ['./ultimo-seguimiento.component.scss']
})
export class UltimoSeguimientoComponent implements OnInit {
  form!: FormGroup;
  data!: Observable<any>;

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Comunicación', 'Trabajo en equipo', 'Orientación al servicio', 
            'Orientación al logro', 'Conocimiento técnico' ],
    datasets: [
      { data: [ 1, 2, 2, 3, 5 ], label: 'Competencias SETI' ,
      hoverBackgroundColor: ['rgba(194,56,47,0.8)']},
      
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    backgroundColor: '#C2382F',
    borderColor: 'white',
  };

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
