import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { ShowUniversiteComponent } from './show-universite/show-universite.component';
import { UniversitesComponent } from './universites.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';

const routes: Routes = [
  { path: '', component: ListUniversiteComponent },
  { path: 'add', component: AddUniversiteComponent },
  { path: 'show/:id', component: ShowUniversiteComponent },
  { path: 'update/:id', component: UpdateUniversiteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitesRoutingModule {}
