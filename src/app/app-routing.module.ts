import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'contrat',
    loadChildren: () =>
      import('./contrats/contrats.module').then((m) => m.ContratsModule),
  },

  { path: 'dashbAdm', component: AdminLayoutComponent },
  { path: 'dashbEtudiant', component: EtudiantLayoutComponent },

  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },

  { path: '', component: AdminLayoutComponent },
  {
    path: 'universite',
    loadChildren: () =>
      import('./universites/universites.module').then(
        (m) => m.UniversitesModule
      ),
  },
  {
    path: 'equipes',
    loadChildren: () =>
      import('./equipes/equipes.module').then((m) => m.EquipesModule),
  },
  {
    path: 'detailequipes',
    loadChildren: () =>
      import('./detailequipes/detailequipes.module').then(
        (m) => m.DetailequipesModule
      ),
  },
  {
    path: 'reclamation',
    loadChildren: () =>
      import('./reclamation/reclamation.module').then(
        (m) => m.ReclamationModule
      ),
  },
  {
    path: 'departement',
    loadChildren: () =>
      import('./departement/departement.module').then(
        (m) => m.DepartementModule
      ),
  },
  {
    path: 'etudiants',
    loadChildren: () =>
      import('./etudiants/etudiants.module').then((m) => m.EtudiantsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
