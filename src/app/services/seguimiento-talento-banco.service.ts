import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface seguimiento {
  tale_id: number;
  comp_comunicacion: number;
  comp_trabajoenequipo: number;
  comp_orientacionalservicio: number;
  comp_orientacionallogro: number;
  comp_conocimientotecnico: number;
  opme_habilidadblanda: string;
  opme_habilidadtecnica: string;
  reco_habilidadblanda: string;
  reco_habilidadtecnica: string;
}


@Injectable({
  providedIn: 'root'
})
export class SeguimientoTalentoBancoService {

  constructor(private http: HttpClient) { }

  seguimientoBanco (seguimiento: seguimiento) {
    return this.http.post('http://localhost:3005/v1/prueba/13', seguimiento)
  }
}
