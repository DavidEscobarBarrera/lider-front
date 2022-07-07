import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeaderResponse} from '../models/leader';
import {map} from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SetiLeaderInfoService {

  constructor(private http: HttpClient) {}

  getLeaderSetiInfo() {
    const token = JSON.parse(localStorage.getItem('token') || '');
    const decode: any = jwt_decode(token);
    return this.http.get<LeaderResponse>(`http://localhost:3003/v1/getleaderbyId/${decode.id}`)
      .pipe(map(res => res.response));
  }

  inClientId$ = this.getLeaderSetiInfo().pipe(map(res => res.plise_id));

}
