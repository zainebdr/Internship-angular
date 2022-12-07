import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';

import { ListContratComponent } from './list-contrat/list-contrat.component';

import { ListEtudiantContratComponent } from './list-etudiant-contrat/list-etudiant-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ContratsComponent,

    ListContratComponent,

    ListEtudiantContratComponent,
    FormContratComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule,

    ComponentsModule,
    FormsModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
  ]
})
export class ContratsModule { }
