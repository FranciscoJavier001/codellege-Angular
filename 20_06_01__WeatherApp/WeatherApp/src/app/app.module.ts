import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CardsWeatherComponent } from './components/cards-weather/cards-weather.component';

import { HttpClientModule } from "@angular/common/http";
import { KelvinCelsiusPipe } from './pipes/kelvin-celsius.pipe';
import { CambiarImagenClimaDirective } from './directivas/cambiar-imagen-clima.directive';
import { ConstruirUrlImagenPipe } from './pipes/construir-url-imagen.pipe';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './app.routes';
import { DetallesComponent } from './components/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardsWeatherComponent,
    KelvinCelsiusPipe,
    CambiarImagenClimaDirective,
    ConstruirUrlImagenPipe,
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
