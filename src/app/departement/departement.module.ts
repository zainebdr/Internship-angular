import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { DepartementformComponent } from './departementform/departementform.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
import { ComponentsModule } from '../components/components.module';
import { ListEtudiantDepartComponent } from './list-etudiant-depart/list-etudiant-depart.component';



@NgModule({
  declarations: [
    DepartementComponent,
    DepartementformComponent,
    SearchPipe,
    ListEtudiantDepartComponent],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ComponentsModule,

  ],
  exports:[
    DepartementformComponent
  ]
})
export class DepartementModule { }
