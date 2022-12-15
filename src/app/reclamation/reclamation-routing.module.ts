import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';
import { ReclamationComponent } from './reclamation.component';

const routes: Routes = [{ path: '', component: ReclamationComponent },
{path:'addRec', component:FormReclamationComponent},
{path:'updateRec/:idRec', component: FormReclamationComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
