import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccionMejoraService {

  constructor(private http: HttpClient) {}

  createAction(action: any) {
    return this.http.post('http://localhost:3007/v1/action', action)
  }
}
