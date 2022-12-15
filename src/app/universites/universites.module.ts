import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitesRoutingModule } from './universites-routing.module';
import { UniversitesComponent } from './universites.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ShowUniversiteComponent } from './show-universite/show-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartementModule } from '../departement/departement.module';



@NgModule({
    declarations: [
        AddUniversiteComponent,
        ShowUniversiteComponent,
        ListUniversiteComponent,
        UpdateUniversiteComponent,
    ],
    imports: [
        CommonModule,
        UniversitesRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        FormsModule,
        DepartementModule,
        
    ]
})
export class UniversitesModule { }
