import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { UserService } from './services/user.service';
import { AnimeService } from './services/anime.service';
import { MaterialModule } from './modules/material.module';
import { AnimesComponent } from './animes/animes.component';
import { UserComponent } from './user/user.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AnimeDetailsComponent,
    AnimesComponent,
    UserComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [],
  providers: [
    UserService,
    AnimeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
