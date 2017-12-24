// Lib
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Service
import { HeroService } from './hero.service';
import { InMemoryDataService } from './in-memory-data.service';

// Router
import { HeroesRoutingModule } from './heroes-routing.module';

// Component
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

// 3rd
import 'rxjs/add/operator/switchMap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroesRoutingModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    InMemoryDataService,
    HeroService
  ]
})

export class HeroesModule { }