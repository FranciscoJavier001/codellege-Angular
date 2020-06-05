import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { GetListComponent } from './components/home/get-list/get-list.component';
import { CuadroNegroComponent } from './components/home/cuadro-negro/cuadro-negro.component';
import { FootersComponent } from './components/shared/footers/footers.component';
import { SmartPhonesComponent } from './components/products/smart-phones/smart-phones.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { LineaBlancaComponent } from './components/products/linea-blanca/linea-blanca.component';
import { TodosComponent } from './components/products/todos/todos.component';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';


//Rutas
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrouselComponent,
    NewArrivalsComponent,
    GetListComponent,
    CuadroNegroComponent,
    FootersComponent,
    SmartPhonesComponent,
    FotografiaComponent,
    LineaBlancaComponent,
    TodosComponent,
    DetailsProductsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }