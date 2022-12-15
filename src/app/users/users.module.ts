import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ListComponent } from './list/list.component';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ComponentsModule
  ]
  ,
  exports: [
    UsersComponent,
    ListUserComponent
  ]
})
export class UsersModule { }
