import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantsComponent } from './form-etudiants/form-etudiants.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EtudiantFrontComponent } from './etudiant-front/etudiant-front.component';
import { ComponentsModule } from '../components/components.module';
import { ContratsComponent } from '../contrats/contrats.component';
import { ContratsModule } from '../contrats/contrats.module';




@NgModule({
  declarations: [
  EtudiantsComponent,
  FormEtudiantsComponent,
  SearchComponent,
  EtudiantFrontComponent,

  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ComponentsModule,
    ContratsModule

  ]
})
export class EtudiantsModule { }

