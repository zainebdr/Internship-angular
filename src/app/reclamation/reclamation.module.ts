import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReclamationComponent,
    FormReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    ReactiveFormsModule


  ]
})
export class ReclamationModule { }
