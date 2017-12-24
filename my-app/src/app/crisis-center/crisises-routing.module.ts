import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisesComponent } from './crisises.component';

const crisisesRoutes: Routes = [
  {
    path: 'crisises',
    component: CrisisesComponent
  }, {
    path: 'crisis/:id',
    component: CrisisDetailComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(crisisesRoutes) ],
  exports: [ RouterModule ]
})

export class CrisisesRoutingModule{}