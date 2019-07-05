import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import {HeroesServices} from './services/heroes.service';

//rutas
import {APP_ROUTING} from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { from } from 'rxjs';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeSearchedComponent } from './components/heroe-searched/heroe-searched.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    HeroeSearchedComponent,
    HeroeCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
