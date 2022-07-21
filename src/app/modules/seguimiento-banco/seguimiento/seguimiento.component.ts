import {Component, OnInit} from '@angular/core';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {debounceTime, switchMap, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ClientLeader} from '../../../models/leader';
import {ClientLeaderService} from '../../../services/client-leader.service';
import {SetiLeaderInfoService} from '../../../services/seti-leader-info.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions!: Observable<ClientLeader[]>;
  inClientId!: number;
  visibleLeader = true;
  visibleTalent = true;

  constructor(private clientLeaderService: ClientLeaderService,
              private setiLeaderService: SetiLeaderInfoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    try {
      this.inClientId = this.setiLeaderService.userData.plise_id;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(name => this.filter(name))
        )
    } catch (e) {}
  }

  displayFn(user: ClientLeader): string {
    return user && user.nombre ? user.nombre : '';
  }

  filter(name: string): Observable<ClientLeader[]> {
    const filterValue = name.toString().toLowerCase();
    return this.clientLeaderService.getClientLeaders(this.inClientId.toString())
      .pipe(map(response => response.filter(option => option.nombre.toLowerCase().includes(filterValue))));
  }

  selectLeader(value: any) {
    this.router.navigate(['lider', this.inClientId, value], {relativeTo: this.activatedRoute});
  }
}
