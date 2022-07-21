import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seguimiento-banco-talento',
  templateUrl: './seguimiento-banco-talento.component.html',
  styleUrls: ['./seguimiento-banco-talento.component.scss']
})
export class SeguimientoBancoTalentoComponent implements OnInit {

  constructor() { }
  fecha: Date = new Date;

  habilidadesBlandasRec = new FormControl();

  habilidadesTecnicasRec = new FormControl();

  habilidadesBlandasOpor = new FormControl();

  habilidadesTecnicasOpor = new FormControl();

  talentoBancoForm = new FormGroup ({
    habilidadesTecnicasRec: this.habilidadesTecnicasRec,
    habilidadesBlandasRec: this.habilidadesBlandasRec,
    habilidadesTecnicasOpor: this.habilidadesTecnicasOpor,
    habilidadesBlandasOpor: this.habilidadesBlandasOpor,
  })

  talentoBanco(){
    console.log(this.talentoBancoForm.value);

  }

  ngOnInit(): void {
  }
  
  
}
