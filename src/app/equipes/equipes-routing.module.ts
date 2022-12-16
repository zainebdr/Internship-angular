import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipesComponent } from './equipes.component';
import { FormEquipesComponent } from './form-equipes/form-equipes.component';
import { ListEquipeEtudiantComponent } from './list-equipe-etudiant/list-equipe-etudiant.component';

const routes: Routes = [{ path: '', component: EquipesComponent },
{ path: 'add', component:FormEquipesComponent },
{path:'updateEqp/:idEquipe/:idEqp', component: FormEquipesComponent},
{path:'equipeEtud', component: ListEquipeEtudiantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
