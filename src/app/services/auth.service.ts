import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User, Root} from '../models/user';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router) {}

  login(credentials: User) {
    return this.http.post<Root>('http://localhost:3001/v1/auth', credentials)
      .pipe(
        tap(value => {
          if (!value.response) {
            throw new Error('Oops, no token found!')
          }
        })
      )
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token')
    if (!token) {
      return false
    }
    if (token && this.jwtHelper.isTokenExpired(token)) {
      localStorage.removeItem('token')
      return false
    }
    return true
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }
}
