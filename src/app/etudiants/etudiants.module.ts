import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantsComponent } from './form-etudiants/form-etudiants.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  EtudiantsComponent,
  FormEtudiantsComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule,

  ]
})
export class EtudiantsModule { }

