import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UniversitesComponent } from './universites/universites.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, UniversitesComponent],
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
      })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
