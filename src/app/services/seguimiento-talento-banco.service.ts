import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {TalentInfoResponse} from "../models/leader";
import {map, pluck} from "rxjs";

export interface UltimoSeguimiento {
  status: number;
  data: Data;
}
export interface Data {
  tale_id: number;
  segu_id: number;
  reco_habilidadblanda: string;
  reco_habilidadtecnica: string;
  opme_habilidadblanda: string;
  opme_habilidadtecnica: string;
  competencias: Competencias;
  segu_fecha: string;
}
export interface Competencias {
  COMUNICACIÓN: number;
  "TRABAJO EN EQUIPO": number;
  "CONOCIMIENTO TÉCNICO": number;
  "ORIENTACIÓN AL LOGRO": number;
  "ORIENTACIÓN AL SERVICIO": number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeguimientoTalentoBancoService {
  url = 'http://localhost:3005/v1/';

  constructor(private http: HttpClient) {
  }

  seguimientoBanco(seguimiento: any, registeredBy: number) {
    return this.http.post(`${this.url}tracking/${registeredBy}`, seguimiento);
  }

  getCompetencias() {
    return this.http.get(this.url + 'gettypecompetences');
  }

  getTalentInfoById(id: string) {
    return this.http.get<TalentInfoResponse>(`http://localhost:3005/v1/gettalentsbyid/${id}`)
      .pipe(map(value => ({
        nombre: value.data[0].nombre,
        cargo: value.data[0].tale_cargo,
        documento: value.data[0].tale_documentoidentidad,
        lider: value.data[0].lider
      })))
  }

  loadSeguimiento() {
    return this.http.get<UltimoSeguimiento>(`http://localhost:3005/v1/gettalentsbyidinfo/251`)
      .pipe(
        pluck('data')
      )
  }

  loadData() {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/3')
  }


}
