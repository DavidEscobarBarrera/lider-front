import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    InputComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    
  ],
  exports: [
    InputComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule {}
