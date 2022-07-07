import {Component, OnInit} from '@angular/core';
import {ClientLeader} from '../../../models/leader';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {debounceTime, firstValueFrom, switchMap, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {ClientLeaderService} from '../../../services/client-leader.service';
import {SetiLeaderInfoService} from '../../../services/seti-leader-info.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions!: Observable<ClientLeader[]>;
  inClientId!: number;
  visible = false;

  constructor(private clientLeaderService: ClientLeaderService,
              private setiLeaderService: SetiLeaderInfoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    this.inClientId = await firstValueFrom(this.setiLeaderService.inClientId$);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(name => this.filter(name))
      )
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

  show() {
    this.visible = !this.visible
  }
}
