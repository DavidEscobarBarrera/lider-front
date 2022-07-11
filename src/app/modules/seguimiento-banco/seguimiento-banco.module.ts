import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SeguimientoBancoRoutingModule} from './seguimiento-banco-routing.module';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';
import {SharedModule} from '../../shared/shared.module';
import {TalentTableComponent} from './talent-table/talent-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {SeguimientoBancoTalentoComponent} from './seguimiento-banco-talento/seguimiento-banco-talento.component';

@NgModule({
  declarations: [
    SeguimientoComponent,
    TalentTableComponent,
    SeguimientoBancoTalentoComponent
  ],
  imports: [
    CommonModule,
    SeguimientoBancoRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class SeguimientoBancoModule {
}
