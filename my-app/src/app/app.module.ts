// Lib
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

// Directive
import { SpyDirective } from './directive/spy.directive'

// Route
import { AppRoutingModule }  from './app-routing.module';

//  Services
import { HeroService } from './service/hero.service';
import { LoggerService } from './service/logger.service'

//  Components
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { PageNotFoundComponent } from './404/404.component'
import { RouterComponent } from './router/router.component';
import { PipeOriginComponent } from './pipe-origin/pipe-origin.component';

// Pipes
import { PlusPipe } from './pipes/plus.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    DataBindComponent,
    LifeCycleHookComponent,
    PageNotFoundComponent,
    RouterComponent,
    PipeOriginComponent,
    PlusPipe,
    SpyDirective
  ],
  providers: [
    HeroService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
