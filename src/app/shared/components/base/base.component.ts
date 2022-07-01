import {Component} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {LeaderSetiInfoService} from '../../../services/leader-seti-info.service';
import {map} from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private authService: AuthService, private leaderInfoService: LeaderSetiInfoService) {}

  leaderInfo$ = this.leaderInfoService.getLeaderSetiInfo()
    .pipe(
      map(data => ({
        name: data.name,
        position: data.position
      }))
    )

  logout() {
    this.authService.logout()
  }
}
