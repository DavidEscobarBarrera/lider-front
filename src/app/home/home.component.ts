import {Component, OnInit} from '@angular/core';
import {SetiLeaderInfoService} from '../services/seti-leader-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  client: any;

  constructor(private leaderInfoService: SetiLeaderInfoService) {
    this.leaderInfoService.getUsuario()
      .subscribe(value => this.client = value);
  }

  ngOnInit() {
    this.client = this.leaderInfoService.userData;
  }
}
