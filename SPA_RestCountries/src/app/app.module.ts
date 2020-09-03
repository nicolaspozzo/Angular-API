import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { AboutComponent } from './components/about/about.component';

import { DataService } from "./services/data.service";

import { HttpClientModule } from "@angular/common/http";
import { ObjetoComponent } from './components/objeto/objeto.component';
import { ObjetoCardComponent } from './components/objeto-card/objeto-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ObjetosComponent,
    AboutComponent,
    ObjetoComponent,
    ObjetoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
