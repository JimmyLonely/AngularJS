// Lib
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Route
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './404/404.component'
import { ComposeMessageComponent } from './compose-message.component';

// Module
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule  } from './crisis-center/crisis-center.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // HeroesModule,
    // CrisisCenterModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
