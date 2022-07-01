import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Leader} from '../models/leader';
import {map} from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LeaderSetiInfoService {

  constructor(private http: HttpClient) {
  }

  getLeaderSetiInfo() {
    const token = JSON.parse(localStorage.getItem('token') || '');
    const decode: any = jwt_decode(token)

    return this.http.get<Leader>(`http://localhost:3003/v1/getleaderbyId/${decode.id.toString()}`)
      .pipe(
        map(response => ({
          name: response.response.nombre,
          position: response.response.plise_cargo,
          setiLeaderId: response.response.pusua_id,
          inClientId: response.response.plise_id,
          client: response.response.pclie_nombre
        }))
      )
  }
}
