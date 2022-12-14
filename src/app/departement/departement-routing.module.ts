import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement.component';
import { DepartementformComponent } from './departementform/departementform.component';

const routes: Routes = [{ path: '', component: DepartementComponent },
{ path: 'addep', component: DepartementformComponent },
{ path: 'updatedep/:idDepart', component: DepartementformComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
