import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) {}
  
  header(){
    
    const headers= new HttpHeaders()
    .set('token', JSON.parse(localStorage.getItem('token')!))
    

    return this.http.get<any>('http://localhost:3003/v1/getleaderbyId/2',{"headers":headers})
   
  }

  
}

