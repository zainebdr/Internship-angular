import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantsComponent } from './form-etudiants/form-etudiants.component';

const routes: Routes = [{ path: '', component: EtudiantsComponent },
{ path: 'addEtudiant', component:FormEtudiantsComponent },
{path:'updateEtudiant/:idEtudiant', component: FormEtudiantsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }