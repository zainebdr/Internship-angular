import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailequipesRoutingModule } from './detailequipes-routing.module';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailEquipesComponent } from './form-detail-equipes/form-detail-equipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    DetailequipesComponent,
    FormDetailEquipesComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    DetailequipesRoutingModule,    
    ReactiveFormsModule,
    FormsModule


  ]
})
export class DetailequipesModule { }
