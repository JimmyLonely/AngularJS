import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { LifeCycleHookComponent} from './life-cycle-hook/life-cycle-hook.component';

const routes: Routes = [ {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  }, {
    path: 'heroes',
    component: HeroesComponent
  }, {
    path: 'data-bind',
    component: DataBindComponent
  }, {
    path: 'life-cycle-hook',
    component: LifeCycleHookComponent
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}