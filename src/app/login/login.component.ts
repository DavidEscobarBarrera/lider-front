import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {SetiLeaderInfoService} from '../services/seti-leader-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  inSubmission = false;
  @ViewChild('content', {static: false}) private content: any;

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  typeAuth = new FormControl('L');

  loginForm = new FormGroup(
    {
      pusua_nombreusuario: this.email,
      pusua_contrasena: this.password,
      pusua_tipoacceso: this.typeAuth
    }
  )

  constructor(private modalService: NgbModal,
              private authService: AuthService,
              private router: Router,
              private setiLeaderService: SetiLeaderInfoService) {}

  open(content: any) {
    this.modalService.open(content, {centered: true, size: 'lg'});
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.inSubmission = true;
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: response => {
          localStorage.setItem('token', JSON.stringify(response.response))
          this.setiLeaderService.getLeaderSetiInfo();
          this.router.navigate(['/']);
        },
        error: () => {
          this.open(this.content);
          this.inSubmission = false;
        }
      }
    )
  }
}
