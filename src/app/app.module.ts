import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UniversitesComponent } from './universites/universites.component';
import { ComponentsModule } from './components/components.module';
import { ContratsComponent } from './contrats/contrats.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EtudiantLayoutComponent } from './layouts/etudiant-layout/etudiant-layout.component';
import { UsersModule } from './users/users.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContratsModule } from './contrats/contrats.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, UniversitesComponent,
    LoginComponent,
    RegisterComponent,
    EtudiantLayoutComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      tapToDismiss:true
      }),
    UsersModule,
    ContratsModule,
    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
