import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },
                          { path: 'contrat', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
