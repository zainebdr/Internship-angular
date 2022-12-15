import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { FormEquipesComponent } from './form-equipes/form-equipes.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination' ;


@NgModule({
  declarations: [
    EquipesComponent,
    FormEquipesComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    OrderModule ,
    NgxPaginationModule,

  ]
})
export class EquipesModule { }
