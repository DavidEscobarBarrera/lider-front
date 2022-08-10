import {Component, OnInit, ViewChild} from '@angular/core';
import {lastValueFrom, Observable, shareReplay, tap} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import {SeguimientoTalentoBancoService} from '../../../services/seguimiento-talento-banco.service';
import {ChartConfiguration} from 'chart.js';
import {map} from 'rxjs/operators';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-ultimo-seguimiento',
  templateUrl: './ultimo-seguimiento.component.html',
  styleUrls: ['./ultimo-seguimiento.component.scss']
})
export class UltimoSeguimientoComponent implements OnInit {
  form!: FormGroup;
  data!: Observable<any>;
  formData!: Observable<any>
  talentInfo!: Observable<any>;
  tale_id: any;
  barChartLegend = true;
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Comunicación',
      'Trabajo en equipo',
      'Conocimiento técnico',
      'Orientación al logro',
      'Orientación al servicio'
    ],
    datasets: [
      {
        data: [],
        label: 'Competencias SETI',
        hoverBackgroundColor: ['rgba(194,56,47,0.8)'],
        barThickness: 25
      }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    backgroundColor: '#C2382F',
    scales: {
      y: {
        max: 5
      }
    }
  };

  constructor(private seguimientoTalentoService: SeguimientoTalentoBancoService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) {
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(value => this.tale_id = value.get('id'));
    this.talentInfo = this.seguimientoTalentoService.getTalentInfoById(this.tale_id);
    this.data = this.seguimientoTalentoService.loadLastEvaluation(this.tale_id)
      .pipe(shareReplay())

    this.barChartData.datasets[0].data = await lastValueFrom(
      this.data
        .pipe(map(value => Object.values(value.competencias)))
    )

    this.form = this.fb.group({
      reco_habilidadblanda: [''],
      reco_habilidadtecnica: [''],
      opme_habilidadblanda: [''],
      opme_habilidadtecnica: ['']
    })

    this.formData = this.data
      .pipe(
        tap(data => this.form.patchValue(data))
      )
  }

  back(): void {
    this.location.back()
  }

  submit() {
    console.log(this.form.value)
  }
}
