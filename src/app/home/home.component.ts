import {Component} from '@angular/core';
import {map} from 'rxjs';
import {SetiLeaderInfoService} from '../services/seti-leader-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private leaderInfoService: SetiLeaderInfoService) {}

  client$ = this.leaderInfoService.getLeaderSetiInfo()
    .pipe(
      map(data => ({
        client: data.pclie_nombre
        })
      )
    )

}
