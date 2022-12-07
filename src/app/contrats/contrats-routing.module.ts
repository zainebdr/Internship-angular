import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratsComponent } from './contrats.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [{ path: '', component: ContratsComponent, children:[
  {path:'',redirectTo: 'list', pathMatch:"full"},
  {path:'list', component: ListContratComponent},
  {path:'contrat/update/:idContrat', component: FormContratComponent},] },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
