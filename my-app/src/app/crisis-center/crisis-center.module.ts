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
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

// Component
import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisesComponent }       from './crisises.component';
import { CrisisDetailComponent }     from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

// 3rd
import 'rxjs/add/operator/switchMap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CrisisCenterRoutingModule,
    InMemoryWebApiModule.forFeature(InMemoryDataService)
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisesComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ],
  providers: [
    InMemoryDataService,
    CrisisService
  ]
})

export class CrisisCenterModule { }