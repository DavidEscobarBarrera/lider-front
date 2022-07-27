import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientLeaderService} from '../../../services/client-leader.service';
import {Talent} from '../../../models/leader';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-talent-table',
  templateUrl: './talent-table.component.html',
  styleUrls: ['./talent-table.component.scss']
})
export class TalentTableComponent implements OnInit{
  icId: string;
  clId: string;
  name: Observable<any>;
  dataSource!: Talent[];
  displayedColumns: string[];

  constructor(private activatedRoute: ActivatedRoute, private clientLeaderService: ClientLeaderService) {
    this.icId = this.activatedRoute.snapshot.params['icId'];
    this.clId = this.activatedRoute.snapshot.params['clId'];
    this.name = this.clientLeaderService.getClientLeaderInfo(this.clId);
    this.displayedColumns = ['color','nombre', 'documento', 'satisfacción', 'desempeño', 'ultimo seguimiento'];
  }

  ngOnInit() {
    this.clientLeaderService.getTalents(this.icId, this.clId).subscribe(value => this.dataSource = value);
  }
}
