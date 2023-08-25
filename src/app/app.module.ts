//--------------------------------------------------------
// Fichier: app.module.ts
// Dev: Tom Strohmeier
// Date: 26-09-2022
//--------------------------------------------------------

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { GrilleJeuComponent } from './grille-jeu/grille-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    GrilleJeuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
