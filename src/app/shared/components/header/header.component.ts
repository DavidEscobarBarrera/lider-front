import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import { HeaderService } from "../../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombre!: string;
  cargo!: string;

  constructor(private authService: AuthService, private headerservice:HeaderService) { }

  ngOnInit(): void {
    this.headerservice.header().subscribe(valor => {
      this.nombre = valor.response.nombreCompleto
      this.cargo = valor.response.rol
    })
  }

  logout() {
    this.authService.logout()
  }
}
