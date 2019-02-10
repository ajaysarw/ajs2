import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDescriptionComponent } from './hero-description/hero-description.component';
import { HttpClientModule } from '@angular/common/http';

// another decorator function: convert any class into a module
@NgModule(
  {
    // properties: declarations, imports .......
    // every component which is part of this module should be added here.
    declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      HeroDescriptionComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
