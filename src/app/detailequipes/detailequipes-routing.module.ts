import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailequipesComponent } from './detailequipes.component';
import { FormDetailEquipesComponent } from './form-detail-equipes/form-detail-equipes.component';

const routes: Routes = [{ path: '', component: DetailequipesComponent },
{ path: 'addDet', component:FormDetailEquipesComponent },
{path:'updateDetEqp/:idEquipe', component: DetailequipesComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipesRoutingModule { }
