// Lib
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { LifeCycleHookComponent} from './life-cycle-hook/life-cycle-hook.component';
import { PageNotFoundComponent } from './404/404.component'
import { RouterComponent } from './router/router.component';
import { PipeOriginComponent } from './pipe-origin/pipe-origin.component';

// Routes
const routes: Routes = [
  {
    path: 'pipe-origin',
    component: PipeOriginComponent
  }, {
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
  }, {
    path: 'router',
    component: RouterComponent
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}