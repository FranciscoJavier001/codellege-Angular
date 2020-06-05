import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { CardsComponent } from './components/cards/cards.component';

// Importacioon Metodos HTTP
import { HttpClientModule } from '@angular/common/http'

// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DescriptionPokemonComponent } from './components/description-pokemon/description-pokemon.component';
import { appRouting } from './components/app.routers';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { MatChipsModule, MatChip } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CardsComponent,
    DescriptionPokemonComponent,
    GridCardsComponent,
  ],
  imports: [
    appRouting,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
