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

@NgModule({
  declarations: [
    SeguimientoComponent,
    TalentTableComponent
  ],
  imports: [
    CommonModule,
    SeguimientoBancoRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule
  ]
})
export class SeguimientoBancoModule {
}
