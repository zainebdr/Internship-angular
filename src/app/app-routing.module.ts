import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [   { path: '',          component: LoginComponent },
                          { path: 'login',          component: LoginComponent },
                          { path: 'register',       component: RegisterComponent },
                          { path: 'contrat', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },

                          { path: 'dashbAdm',          component: AdminLayoutComponent },
                          { path: 'dashbEtudiant',          component: EtudiantLayoutComponent },


                          { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
