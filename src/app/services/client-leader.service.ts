import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  ClientLeaderInfoResponse,
  ClientLeaderResponse,
  TalentResponse,
  TalentForSearchBarResponse
} from '../models/leader';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientLeaderService {

  constructor(private http: HttpClient) {}

  getClientLeaders(id: string) {
    return this.http.get<ClientLeaderResponse>(`http://localhost:3005/v1/getleaderclientbyid/${id}`)
      .pipe(map(res => res.data))
  }

  getTalentsForSearchBar(id: string) {
    return this.http.get<TalentForSearchBarResponse>(`http://localhost:3005/v1/gettalentsbyidseti/${id}`)
      .pipe(map(res => res.data))
  }

  getTalents(icId: string, clId:string) {
    return this.http.get<TalentResponse>(`http://localhost:3005/v1/gettalentclientbyid/${icId}/${clId}`)
      .pipe(map(value => value.data))
  }

  getClientLeaderInfo(id: string) {
    return this.http.get<ClientLeaderInfoResponse>(`http://localhost:3005/v1/getoneleaderclientbyid/${id}`)
      .pipe(map(value => ({
        name: value.data[0].lidenombres
      })))
  }
}
