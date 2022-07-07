import {Component} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {map} from 'rxjs';
import {SetiLeaderInfoService} from '../../../services/seti-leader-info.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  constructor(private authService: AuthService, private leaderInfoService: SetiLeaderInfoService) {}

  leaderInfo$ = this.leaderInfoService.getLeaderSetiInfo()
    .pipe(
      map(data => ({
        name: data.nombre,
        position: data.plise_cargo
      }))
    )

  logout() {
    this.authService.logout()
  }
}
