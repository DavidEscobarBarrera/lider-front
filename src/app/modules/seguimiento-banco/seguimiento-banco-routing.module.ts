import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeguimientoComponent} from './seguimiento/seguimiento.component';
import {TalentTableComponent} from './talent-table/talent-table.component';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoComponent
  },
  {
    path: 'lider/:icId/:clId',
    component: TalentTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoBancoRoutingModule {
}
