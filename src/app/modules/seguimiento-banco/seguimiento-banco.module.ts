import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SeguimientoBancoTalentoComponent} from './seguimiento-banco-talento/seguimiento-banco-talento.component';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';
import {TalentTableComponent} from './talent-table/talent-table.component';
import {SeguimientoBancoRoutingModule} from './seguimiento-banco-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UltimoSeguimientoComponent} from './ultimo-seguimiento/ultimo-seguimiento.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    SeguimientoComponent,
    TalentTableComponent,
    SeguimientoBancoTalentoComponent,
    UltimoSeguimientoComponent
  ],
  imports: [
    CommonModule,
    SeguimientoBancoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    NgbModule,
    NgChartsModule
  ]
})
export class SeguimientoBancoModule {
}
