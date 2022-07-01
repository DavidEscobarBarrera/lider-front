import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SeguimientoBancoRoutingModule} from './seguimiento-banco-routing.module';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    SeguimientoComponent
  ],
  imports: [
    CommonModule,
    SeguimientoBancoRoutingModule,
    SharedModule
  ]
})
export class SeguimientoBancoModule {
}
