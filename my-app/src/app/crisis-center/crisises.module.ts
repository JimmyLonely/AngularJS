// Lib
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Service
import { CrisisService } from './crisis.service';
import { InMemoryDataService } from '../heroes/in-memory-data.service';

// Router
import { CrisisesRoutingModule } from './crisises-routing.module';

// Component
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisesComponent } from './crisises.component';

// 3rd
import 'rxjs/add/operator/switchMap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forFeature(InMemoryDataService),
    CrisisesRoutingModule
  ],
  declarations: [
    CrisisDetailComponent,
    CrisisesComponent
  ],
  providers: [
    InMemoryDataService,
    CrisisService
  ]
})

export class CrisisesModule { }