import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { FormEquipesComponent } from './form-equipes/form-equipes.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination' ;
import { ComponentsModule } from '../components/components.module';
import { ListEquipeEtudiantComponent } from './list-equipe-etudiant/list-equipe-etudiant.component';


@NgModule({
  declarations: [
    EquipesComponent,
    FormEquipesComponent,
    ListEquipeEtudiantComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    OrderModule ,
    NgxPaginationModule,
    ComponentsModule,

  ],
  exports: [
    EquipesComponent,
    FormEquipesComponent
  ]
})
export class EquipesModule { }
