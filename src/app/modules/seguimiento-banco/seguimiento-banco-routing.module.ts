import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeguimientoBancoTalentoComponent} from './seguimiento-banco-talento/seguimiento-banco-talento.component';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';
import {TalentTableComponent} from './talent-table/talent-table.component';
import {UltimoSeguimientoComponent} from './ultimo-seguimiento/ultimo-seguimiento.component';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoComponent
  },
  {
    path: 'lider/:icId/:clId',
    component: TalentTableComponent
  },
  {
    path: 'talento/:id',
    component: SeguimientoBancoTalentoComponent
  },
  {
    path: 'ultimo-seguimiento/:id',
    component: UltimoSeguimientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoBancoRoutingModule {
}
