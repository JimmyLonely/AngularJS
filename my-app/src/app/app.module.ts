// Lib
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Route
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app/app.component';
import { PageNotFoundComponent } from './404/404.component'
import { ComposeMessageComponent } from './compose-message.component';

// Module
import { HeroesModule } from './heroes/heroes.module';

// Service
import { LoginRoutingModule }      from './login/login-routing.module';
import { LoginComponent }          from './login/login.component';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
