import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {TalentInfoResponse} from '../models/leader';
import {map, pluck} from 'rxjs';
import { UltimoSeguimiento } from '../models/seguimiento';

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
    return this.http.get<TalentInfoResponse>(`${this.url}gettalentsbyid/${id}`)
      .pipe(map(value => ({
        nombre: value.data[0].nombre,
        cargo: value.data[0].tale_cargo,
        documento: value.data[0].tale_documentoidentidad,
        lider: value.data[0].lider
      })))
  }

  loadLastEvaluation(id: string) {
    return this.http.get<UltimoSeguimiento>(`${this.url}gettalentsbyidinfo/${id}`)
      .pipe(
        pluck('data')
      )
  }
}
