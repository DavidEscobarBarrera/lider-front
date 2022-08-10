import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration} from 'chart.js';
import {map} from 'rxjs/operators';
import {lastValueFrom, shareReplay, tap, Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import {SeguimientoTalentoBancoService} from '../../../services/seguimiento-talento-banco.service';
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
  contadorSave!: any
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
    this.contadorSave = 0;
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
      opme_habilidadtecnica: [''],
      actualizado: [false],
      reconocimientos: this.fb.group({
        actualizado: [false],
        reco_habilidadblanda: [{value: '', disabled: true}],
        reco_habilidadtecnica: [{value: '', disabled: true}],
        envio: this.fb.group({
          reco_habilidadblanda: [{value: ''}],
          reco_habilidadtecnica: [{value: ''}]
        })

      }),
      opcionMejora: this.fb.group({
        actualizado: [false],
        opme_habilidadblanda: [{value: '', disabled: true}],
        opme_habilidadtecnica: [{value: '', disabled: true}],
        envio: this.fb.group({
          opme_habilidadblanda: [{value: ''}],
          opme_habilidadtecnica: [{value: ''}]
        })
      })
    })

    this.formData = this.data
      .pipe(
        tap(data => {
          this.form.get('reconocimientos')?.get('envio')?.patchValue(data);
          this.form.get('opcionMejora')?.get('envio')?.patchValue(data);
          this.form.get('reconocimientos')?.patchValue(data);
          this.form.get('opcionMejora')?.patchValue(data);
        })
      )
  }

  back(): void {
    this.location.back()
  }

  submit() {
    console.log(this.form.value)
  }

  enableInput(ControlPadre: any, VariableControl: string) {
    if (ControlPadre.get(VariableControl).status === 'DISABLED') {
      if (this.contadorSave === 0) {
        ControlPadre.get(VariableControl).enable()
        this.contadorSave = 1
      }

    } else {
      this.saveInput(ControlPadre, VariableControl)
      ControlPadre.get(VariableControl).disable()
      this.contadorSave = 0
    }
  }

  saveInput(ControlPadre: any, VariableControl: string) {
    ControlPadre.get('envio').get(VariableControl).setValue(ControlPadre.get(VariableControl).value);
    ControlPadre.get('actualizado').setValue(true)
    this.form.get('actualizado')?.setValue(true)
  }

  cancelInfo(ControlPadre: any, VariableControl: string) {
    ControlPadre.get(VariableControl).setValue(ControlPadre.get('envio').get(VariableControl).value)
    ControlPadre.get(VariableControl).disable()
    this.contadorSave = 0;
  }
}
