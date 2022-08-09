import {Component, OnInit} from '@angular/core';
import {Observable, shareReplay, tap} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
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


  talentInfo!: Observable<any>;
  tale_id: any;

  constructor(private seguimientoTalentoService: SeguimientoTalentoBancoService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) {}

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
