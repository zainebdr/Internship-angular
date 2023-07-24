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
import { AddContratComponent } from './add-contrat/add-contrat.component';



@NgModule({
  declarations: [
    ContratsComponent,

    ListContratComponent,

    ListEtudiantContratComponent,
    FormContratComponent,
    AddContratComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule,

    ComponentsModule,
    FormsModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ContratsComponent,
    ListEtudiantContratComponent,
    ListContratComponent,
    AddContratComponent
  ]
})
export class ContratsModule { }
