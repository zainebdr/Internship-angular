import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent },
  {
    path: 'universite',
    loadChildren: () =>
      import('./universites/universites.module').then(
        (m) => m.UniversitesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
