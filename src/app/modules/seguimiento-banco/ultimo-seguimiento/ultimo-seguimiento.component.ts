import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GuardsCheckStart } from '@angular/router';
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

  contadorSave: number = 0;

  constructor(private seguimientoTalentoService: SeguimientoTalentoBancoService, private fb: FormBuilder) {
  }



  ngOnInit(): void {
    this.form = this.fb.group({
      actualizado: [false],
      reconocimientos: this.fb.group({
        actualizado: [false],
        reco_habilidadblanda: [{value:'',disabled: true}],
        reco_habilidadtecnica: [{value:'',disabled: true}],
        envio: this.fb.group({
          reco_habilidadblanda: [{value:''}],
          reco_habilidadtecnica: [{value:''}],
        })
      }),
      opcionMejora: this.fb.group({
        actualizado: [false],
        opme_habilidadblanda: [{value:'',disabled: true}],
        opme_habilidadtecnica: [{value:'',disabled: true}],
        envio: this.fb.group({
        opme_habilidadblanda: [{value:''}],
        opme_habilidadtecnica: [{value:''}],
        })
      })
    })

    this.data = this.seguimientoTalentoService.loadSeguimiento()
      .pipe(
        tap(data => {
          this.form.get('reconocimientos')?.get('envio')?.patchValue(data);
          this.form.get('opcionMejora')?.get('envio')?.patchValue(data);
          this.form.get('reconocimientos')?.patchValue(data);
          this.form.get('opcionMejora')?.patchValue(data);
        })
      )
  }

  submit() {

  }

  enableInput (ControlPadre: any, VariableControl: string){
     if(ControlPadre.get(VariableControl).status == 'DISABLED'){
      if(this.contadorSave == 0){
        ControlPadre.get(VariableControl).enable()
        this.contadorSave = 1
      }

     }else{
      this.saveInput(ControlPadre, VariableControl)
      ControlPadre.get(VariableControl).disable()
      this.contadorSave = 0
     }
  }

  saveInput(ControlPadre: any, VariableControl: string){
    ControlPadre.get('envio').get(VariableControl).setValue(ControlPadre.get(VariableControl).value);
    ControlPadre.get('actualizado').setValue(true)
    this.form.get('actualizado')?.setValue(true)
  }

  cancelInfo(ControlPadre: any, VariableControl: string){
      ControlPadre.get(VariableControl).setValue(ControlPadre.get('envio').get(VariableControl).value)
      ControlPadre.get(VariableControl).disable()
      this.contadorSave = 0;
    }
}
