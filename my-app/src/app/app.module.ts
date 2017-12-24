// Lib
import { NgModule } from '@angular/core';

// Route
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './404/404.component'

// Module
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
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
