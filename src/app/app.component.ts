import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {SetiLeaderInfoService} from './services/seti-leader-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  leaderInfo: any;

  constructor(public authService: AuthService, private leaderInfoService: SetiLeaderInfoService) {
    this.leaderInfoService.getUsuario()
      .subscribe(value => this.leaderInfo = value);
  }

  ngOnInit() {
    this.leaderInfoService.getUserFromLocalStorage();
  }

  logout() {
    this.authService.logout();
  }
}
