import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeaderResponse} from '../models/leader';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class SetiLeaderInfoService {
  user: EventEmitter<any> = new EventEmitter();
  userData: any;

  constructor(private http: HttpClient) {
    this.getUserFromLocalStorage();
  }

  getLeaderSetiInfo() {
    const token = JSON.parse(localStorage.getItem('token') || '');
    const decode: any = jwt_decode(token);
    this.http.get<LeaderResponse>(`http://localhost:3003/v1/getleaderbyId/${decode.id}`)
      .subscribe(value => {
        localStorage.setItem('user', JSON.stringify(value.response));
        this.userData = value.response;
        this.getUserFromLocalStorage();
      });
  }

  getUserFromLocalStorage() {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    return this.user.emit(JSON.parse(localStorage.getItem('user') || '{}'));
  }

  getUsuario() {
    return this.user
  }

  inClientId = JSON.parse(localStorage.getItem('user') || '{}');

  updatePassword(id: any, changePassword: any) {
    return this.http.put(`http://localhost:3003/v1/registerfirstpassword/${id}`, changePassword)
  }
}
