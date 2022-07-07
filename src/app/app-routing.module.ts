import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import {RegistrarAccionMejoraComponent} from "./registrar-accion-mejora/registrar-accion-mejora.component";
import {UnderConstructionComponent} from "./under-construction/under-construction.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'registrar-accion-mejora',
    component: RegistrarAccionMejoraComponent
  },
  {
    path: 'under-construction',
    component: UnderConstructionComponent
  },
  {
    path: 'seguimiento-banco',
    loadChildren: () => import('./modules/seguimiento-banco/seguimiento-banco.module')
      .then(m => m.SeguimientoBancoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
