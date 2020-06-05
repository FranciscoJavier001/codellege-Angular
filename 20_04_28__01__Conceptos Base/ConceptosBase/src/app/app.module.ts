import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { BodyComponent } from './components/Body/body.component';
import { ArticulosComponent } from './components/Articulos/articulos.component';
import { FooterComponent } from './components/Footer/footer.component';
import { PublicidadComponent } from './components/Publicidad/publicidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ArticulosComponent,
    PublicidadComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
