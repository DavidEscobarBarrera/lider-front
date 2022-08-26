import {Component, OnInit} from '@angular/core';
import {ClientLeader, TalentForSearchBar} from '../../../models/leader';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {debounceTime, switchMap, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
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
  myControl2 = new FormControl('');
  filteredOptions2!: Observable<TalentForSearchBar[]>;
  inClientId!: number;
  visibleLeader = true;
  visibleTalent = true;

  constructor(private clientLeaderService: ClientLeaderService,
              private setiLeaderService: SetiLeaderInfoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    try {
      this.inClientId = this.setiLeaderService.userData.liseid;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(name => this.filter(name))
        )
      this.filteredOptions2 = this.myControl2.valueChanges
        .pipe(
          startWith(''),
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(name => this.filter2(name))
        )
    } catch (e) {}
  }

  displayFn(user: ClientLeader): string {
    return user && user.lidenombres ? user.lidenombres : '';
  }

  displayFn2(user: TalentForSearchBar):string {
    return user && user.talnombres ? user.talnombres : '';
  }

  filter(name: string): Observable<ClientLeader[]> {
    const filterValue = name.toString().toLowerCase();
    return this.clientLeaderService.getClientLeaders(this.inClientId.toString())
      .pipe(map(response => response.filter(option => option.lidenombres.toLowerCase().includes(filterValue))));
  }

  filter2(name: string): Observable<TalentForSearchBar[]> {
    const filterValue = name.toString().toLowerCase();
    return this.clientLeaderService.getTalentsForSearchBar(this.inClientId.toString())
      .pipe(map(response => response.filter(option => option.talnombres.toLowerCase().includes(filterValue))))
  }

  selectLeader(value: any) {
    this.router.navigate(['lider', this.inClientId, value], {relativeTo: this.activatedRoute});
  }

  selectTalent(value: any) {
    this.router.navigate(['talento', value], {relativeTo: this.activatedRoute});
  }
}
