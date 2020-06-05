import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './Header/header.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { BodyComponent } from './Body/body.component';
import { SectionsComponent } from './Sections/sections.component';
import { Section1Component } from './Sections/Section1/section1.component';
import { Section2Component } from './Sections/Section2/section2.component';
import { Section3Component } from './Sections/Section3/section3.component';
import { Section4Component } from './Sections/Section4/section4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    SectionsComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
