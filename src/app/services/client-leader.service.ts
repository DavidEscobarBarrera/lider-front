import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientLeaderResponse} from '../models/leader';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientLeaderService {

  constructor(private http: HttpClient) {
  }

  getClientLeaders(id: string) {
    return this.http.get<ClientLeaderResponse>(`http://localhost:3003/v1/getleaderclientbyid/${id}`)
      .pipe(
        map(res => res.data)
      )
  }
}
