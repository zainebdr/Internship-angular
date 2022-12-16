import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationComponent } from './reclamation.component';
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ReclamationComponent,
    FormReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    ReactiveFormsModule,
    ComponentsModule


  ]
})
export class ReclamationModule { }
