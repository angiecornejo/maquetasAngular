import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import {
  NgbDatepickerModule,
  NgbModalModule,
  NgbModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';
// import { DatePickerAdapterISO } from './shared/DatePickerAdapterISO';
// import { DatePickerParserFormatter } from './shared/DatePickerParserFormater';
// import { DatePickerSpanish } from './shared/DatePickerSpanish';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    ProductosComponent,
    PublicacionesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'productos', component: ProductosComponent },
      { path: 'publicaciones', component: PublicacionesComponent }
      
    
    ]),
    NgbModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" },
    // ref angular ngbootrapt datepicker
    // { provide: NgbDateAdapter, useClass: DatePickerAdapterISO },
    // { provide: NgbDateParserFormatter, useClass: DatePickerParserFormatter }, // formato datepicker desde/hacia el imput
    // { provide: NgbDatepickerI18n, useClass: DatePickerSpanish }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
