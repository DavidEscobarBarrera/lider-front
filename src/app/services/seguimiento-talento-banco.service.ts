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
  url: string = 'http://localhost:3005/v1/';
  constructor(private http: HttpClient) { }

  seguimientoBanco (seguimiento: seguimiento) {
    return this.http.post(this.url + 'prueba/13', seguimiento)
  }

  getCompetencias () {
    return this.http.get(this.url + 'gettypecompetences');
  }
}
