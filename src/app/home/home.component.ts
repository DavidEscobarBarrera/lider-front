import {Component} from '@angular/core';
import {LeaderSetiInfoService} from '../services/leader-seti-info.service';
import {map} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private leaderInfoService: LeaderSetiInfoService) {
  }

  client$ = this.leaderInfoService.getLeaderSetiInfo()
    .pipe(
      map(data => ({
        client: data.client
        })
      )
    )

}
