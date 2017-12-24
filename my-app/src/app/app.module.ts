// Lib
import { NgModule } from '@angular/core';

// Route
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './404/404.component'

// Module
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
