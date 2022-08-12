import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SetiLeaderInfoService} from '../services/seti-leader-info.service';
import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit, AfterViewInit {
  client: any;
  @ViewChild('content') private content: any;

  currentPassword = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [Validators.required]);
  confirmNewPassword = new FormControl('', [Validators.required]);

  changePasswordForm = new FormGroup({
    currentPassword: this.currentPassword,
    password: this.newPassword,
    passwordRepeated: this.confirmNewPassword
  })

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
    this.open(this.content)
  }

  open(content: any) {
    this.modalService.open(content);
  }

  submit() {
    console.log(this.changePasswordForm.value)
  }
}
