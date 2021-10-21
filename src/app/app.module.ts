import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorService } from './services/calculator.service';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './components/heroes/hero-list/hero-list.component';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HeroesService } from './services/heroes.service';
import { ApodService } from './services/apod.service';
import { ShowApodComponent } from './components/apod/show-apod/show-apod.component';
import { DateApodComponent } from './components/apod/date-apod/date-apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { BeerService } from './services/beer.service';
import { AbvPipe } from './pipes/abv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroListComponent,
    HeroFormComponent,
    ApodComponent,
    ShowApodComponent,
    DateApodComponent,
    BeersComponent,
    AbvPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [CalculatorService, HeroesService, ApodService, BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
