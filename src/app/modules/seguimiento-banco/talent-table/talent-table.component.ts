import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientLeaderService} from '../../../services/client-leader.service';
import {Talent} from '../../../models/leader';

@Component({
  selector: 'app-talent-table',
  templateUrl: './talent-table.component.html',
  styleUrls: ['./talent-table.component.scss']
})
export class TalentTableComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute, private clientLeaderService: ClientLeaderService) {}

  icId = this.activatedRoute.snapshot.params['icId'];
  clId = this.activatedRoute.snapshot.params['clId'];
  name = this.clientLeaderService.getClientLeaderInfo(this.clId);
  dataSource!: Talent[];

  ngOnInit() {
    this.clientLeaderService.getTalents(this.icId, this.clId).subscribe(value => this.dataSource = value);
  }

  displayedColumns: string[] = ['color','nombre', 'documento', 'satisfacción', 'desempeño', 'ultimo seguimiento'];
}
