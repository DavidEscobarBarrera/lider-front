import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SetiLeaderInfoService} from '../services/seti-leader-info.service';
import {NgbModalConfig, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChangePasswordValidator} from '../validators/change-password-validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit, AfterViewInit {
  client: any;
  hide = true;
  hide2 = true;
  hide3 = true;
  @ViewChild('content') private content: any;
  modalReference!: NgbModalRef;

  currentPassword = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,}$/)
  ]);
  confirmNewPassword = new FormControl('', [Validators.required]);

  changePasswordForm = new FormGroup({
    currentPassword: this.currentPassword,
    password: this.newPassword,
    passwordRepeated: this.confirmNewPassword
  }, [ChangePasswordValidator.match('password', 'passwordRepeated')])

  constructor(
    private leaderInfoService: SetiLeaderInfoService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
    this.leaderInfoService.getUsuario()
      .subscribe(value => this.client = value);
    config.backdrop = 'static'
    config.keyboard = false
    config.centered = true
  }

  ngOnInit() {
    this.client = this.leaderInfoService.userData;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.client.cambioContrasena) {
        this.open(this.content)
      }
    }, 2000)
  }

  open(content: any) {
    this.modalService.open(content);
  }

  submit() {
    if (this.changePasswordForm.invalid) {
      return;
    }
    this.leaderInfoService.updatePassword(this.client.pusua_id, this.changePasswordForm.value)
      .subscribe({
        next: () => {
          localStorage.removeItem('user')
          this.leaderInfoService.getLeaderSetiInfo()
          this.modalReference.close()
        },
        error: err => console.log(err)
      })
  }
}
